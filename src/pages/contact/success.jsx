import React from 'react'

import ErrorBoundary from './../../components/ErrorBoundary'
import Layout from './../../components/Layout/Layout'
import SEO from './../../components/SEO'
import Link from './../../components/Link'
import Container from './../../components/Layout/Container'

function autoRedirect() {
  setTimeout(function() {
    window.location.href = '/'
  }, 5640)
}

export default function Success() {
  autoRedirect()
  return (
    <>
      <SEO title='Success' />
      <ErrorBoundary>
        <Layout>
          <section className='main blurred'>
            <Container>
              <h1>Success!</h1>
              <p>Your message has been submitted, thanks! </p>
              <p>
                I'll do my best to respond within 24 hours, if one is warranted.
                :)
              </p>
              <br />
              <p>
                <small>
                  If you are not redirected automatically, please click{' '}
                  <Link to='/'>here</Link> to go back to homepage.
                </small>
              </p>
            </Container>
          </section>
        </Layout>
      </ErrorBoundary>
    </>
  )
}
