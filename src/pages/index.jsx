import React from "react";

import ErrorBoundary from "./../components/ErrorBoundary";
import Layout from "../components/Layout";
import Homepage from "./homepage";

const IndexPage = () => {
  return (
    <>
    <ErrorBoundary>
      <Layout />
      <main className="main-content">
        <Homepage />
      </main>
    </ErrorBoundary>
    </>
  )
}

export default IndexPage
