import React from 'react'

import ErrorBoundary from './../components/ErrorBoundary'
import Layout from './../components/Layout/Layout'
import SEO from './../components/SEO'
import Link from './../components/Link'

export default function Success() {
  return (
    <>
      <SEO title='Success' />
      <ErrorBoundary>
        <Layout>
          <div>
            <h1>Form submitted successfully!</h1>
            <p>
              Return <Link to='/'>home</Link>...
            </p>
          </div>
        </Layout>
      </ErrorBoundary>
    </>
  )
}
