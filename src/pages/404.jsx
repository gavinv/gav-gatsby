import React from "react"

import ErrorBoundary from './../components/ErrorBoundary'
import Layout from './../components/Layout'
import SEO from './../components/SEO'

export default function Page404() {
  return (
    <>
    <SEO title='404 – Page Not Found' />
      <ErrorBoundary>
        <Layout>
          <div>Whoops. Hit a 404...</div>
        </Layout>
      </ErrorBoundary>
    </>
    )
  }