import React from "react"

import ErrorBoundary from './../components/ErrorBoundary'
import Layout from './../components/Layout'

export default function Blog() {
  return (
    <>
      <ErrorBoundary>
        <Layout>
          <div>Under Development...</div>
        </Layout>
      </ErrorBoundary>
    </>
    )
  }