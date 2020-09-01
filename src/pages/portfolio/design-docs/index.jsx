import React from 'react'

import ErrorBoundary from './../../../components/ErrorBoundary'
import Layout from './../../../components/Layout/Layout'
import SEO from './../../../components/SEO'
import Overview from './overview'

export default function DesignDocs() {
  return (
    <>
      <SEO title='Design Docs' />
      <ErrorBoundary>
        <Layout>
          <Overview />
        </Layout>
      </ErrorBoundary>
    </>
  )
}
