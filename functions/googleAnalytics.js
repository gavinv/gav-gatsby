const request = require('request')
const querystring = require('querystring')
const uuidv4 = require('uuid/v4')

const GA_ENDPOINT = `https://www.google-analytics.com/collect`

// Domains to whitelist. Replace with your own!
const originWhitelist = [] // keep this empty and append domains to whitelist using whiteListDomain()
whitelistDomain('gavinvaught.com')
whitelistDomain('gavinvaught.dev')

function whitelistDomain(domain, addWww = true) {
  const prefixes = [
    'https://',
    'http://',
  ]
  if (addWww) {
    prefixes.push('https://www.')
    prefixes.push('http://www.')
  }
  prefixes.forEach(prefix => originWhitelist.push(prefix + domain))
}


function proxyToGoogleAnalytics(event, done) {
  // get GA params whether GET or POST request
  const params = event.httpMethod.toUpperCase() === 'GET' ? event.queryStringParameters : JSON.parse(event.body)
  const headers = event.headers || {}

  // attach other GA params, required for IP address since client doesn't have access to it. UA and CID can be sent from client
  params.uip = headers['x-forwarded-for'] || headers['x-bb-ip'] || '' // ip override. Look into headers for clients IP address, as opposed to IP address of host running lambda function
  params.ua = params.ua || headers['user-agent'] || '' // user agent override
  params.cid = params.cid || uuidv4() // REQUIRED: use given cid, or generate a new one as last resort. Generating should be avoided because one user can show up in GA multiple times. If user refresh page `n` times, you'll get `n` pageviews logged into GA from "different" users. Client should generate a uuid and store in cookies, local storage, or generate a fingerprint. Check simple-tracker client example

  console.info('proxying params:', params)
  const qs = querystring.stringify(params)

  const reqOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'image/gif',
    },
    url: GA_ENDPOINT,
    body: qs,
  }

  request(reqOptions, (error, result) => {
    if (error) {
      console.info('googleanalytics error!', error)
    } else {
      console.info('googleanalytics status code', result.statusCode, result.statusMessage)
    }
  })

  done()
}

exports.handler = function(event, context, callback) {
  const origin = event.headers['origin'] || event.headers['Origin'] || ''
  console.log(`Received ${event.httpMethod} request from, origin: ${origin}`)

  const isOriginWhitelisted = originWhitelist.indexOf(origin) >= 0
  console.info('is whitelisted?', isOriginWhitelisted) 

  const headers = {
    //'Access-Control-Allow-Origin': '*', // allow all domains to POST. Use for localhost development only
    'Access-Control-Allow-Origin': isOriginWhitelisted ? origin : originWhitelist[0],
    'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type,Accept',
  }

  const done = () => { //test
    callback(null, {
      statusCode: 200,
      headers,
      body: '',
    })
  }

  const httpMethod = event.httpMethod.toUpperCase()

  if (event.httpMethod === 'OPTIONS') { // CORS (required if you use a different subdomain to host this function, or a different domain entirely)
    done()
  } else if ((httpMethod === 'GET' || httpMethod === 'POST') && isOriginWhitelisted) { // allow GET or POST, but only for whitelisted domains
    proxyToGoogleAnalytics(event, done)
  } else {
    callback('Not found')
  }
}