import React from 'react'

import ErrorBoundary from './../components/ErrorBoundary'
import Layout from './../components/Layout/Layout'
import SEO from './../components/SEO'

export default function Blog() {
  return (
    <>
      <SEO title='Blog' />
      <ErrorBoundary>
        <Layout>
          <div>Under Development...</div>
        </Layout>
      </ErrorBoundary>
    </>
  )
}
