import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import ErrorBoundary from './../components/ErrorBoundary'
import Layout from './../components/Layout'
import SEO from './../components/SEO'
import Container from './../components/Layout/Container'

const Wrapper = styled.div`
  filter: grayscale(1) opacity(.8);
  max-width: 256px;
  width: 100%;
  transition: filter 250ms ease-in-out;
  &:hover, &:focus {
    filter: grayscale(0) opacity(1);
  }
`

export default function About() {
  const pdfAndImage = useStaticQuery(
    graphql`{
      ImageQuery: file(relativePath: {eq: "gav-resume-2019-plain.jpg"}) {
        childImageSharp {
          fluid(quality: 80) {
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
            <Container>
            <h1 className='section-heading'>About</h1>
            <p>View/Download my current resume:</p>
            <Wrapper>
              <a download href={ pdfAndImage.PdfQuery.publicURL }>
                <Img
                  height='100%'
                  grayscale={true}
                  fluid={ pdfAndImage.ImageQuery.childImageSharp.fluid }
                  key={ pdfAndImage.PdfQuery.uid }
                />
              </a>

            </Wrapper>
            </Container>
          </section>
        </Layout>
      </ErrorBoundary>
    </>
  )
}