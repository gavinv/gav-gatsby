import React from "react"

import ErrorBoundary from './../components/ErrorBoundary'
import Layout from './../components/Layout'

export default function Page404() {
  return (
    <>
      <ErrorBoundary>
        <Layout>
          <div>Whoops. Hit a 404...</div>
        </Layout>
      </ErrorBoundary>
    </>
    )
  }