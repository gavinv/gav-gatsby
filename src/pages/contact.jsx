import React from "react"

import ErrorBoundary from './../components/ErrorBoundary'
import Layout from './../components/Layout'
import SEO from './../components/SEO'

export default function Contact() {
  return (
    <>
    <SEO title='Contact' />
      <ErrorBoundary>
        <Layout>
          <div>Under Development...</div>
        </Layout>
      </ErrorBoundary>
    </>
    )
  }