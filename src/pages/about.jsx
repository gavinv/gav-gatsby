import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import ErrorBoundary from './../components/ErrorBoundary'
import Layout from './../components/Layout'
import SEO from './../components/SEO'

export default function About() {
  const pdfAndImage = useStaticQuery(
    graphql`{
      ImageQuery: file(relativePath: {eq: "gav-resume-2019-plain.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      PdfQuery: file(relativePath: {eq: "gav-resume-2019-plain.pdf"}) {
        publicURL
        uid
      }
    }`
  )
  return (
    <>
      <SEO title='About' />
      <ErrorBoundary>
        <Layout>
        <section className='main blurred'>
          <h1 className='section-heading'>About</h1>
          <p>lipsum...</p>
        </section>
        <section className='resume-download'>
          <a download href={ pdfAndImage.ImageQuery.childImageSharp.fluid }>
            <Img
              width='100%'
              height='100%'
              fluid={ pdfAndImage.PdfQuery.publicURL }
              key={ pdfAndImage.PdfQuery.uid }
            />
          </a>
        </section>
        </Layout>
      </ErrorBoundary>
    </>
  )
}