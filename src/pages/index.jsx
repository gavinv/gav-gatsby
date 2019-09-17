import React from "react";

import ErrorBoundary from "./../components/ErrorBoundary";
import Layout from "../components/Layout";
import MainNav from "../components/MainNav";
import Blobs from "./../components/Blobs";
import Homepage from "./homepage";
import Footer from "./../components/Footer";
import SEO from "./../components/seo"

const IndexPage = () => {
  return (
    <>
    <SEO title="Gavin Vaught" keywords={[]} />
    <ErrorBoundary>
      <Layout />
      <MainNav />
      <main className="main-content">
        <Blobs />
        <Homepage />
      </main>
      <Footer />
    </ErrorBoundary>
    </>
  )
}

export default IndexPage
