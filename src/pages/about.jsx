import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import ErrorBoundary from './../components/ErrorBoundary'
import Layout from './../components/Layout/Layout'
import SEO from './../components/SEO'
import Container from './../components/Layout/Container'
import Grid from './../components/Layout/Grid'

const Wrapper = styled.div`
  filter: grayscale(1) opacity(0.8);
  max-width: 256px;
  width: 100%;
  transition: filter 250ms ease-in-out;
  &:hover,
  &:focus {
    filter: grayscale(0) opacity(1);
  }
`

export default function About() {
  const staticQuery = useStaticQuery(
    graphql`
      {
        ImageQuery0: file(relativePath: { eq: "gav-resume-2020-03-01.jpg" }) {
          childImageSharp {
            fluid(quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        PdfQuery: file(relativePath: { eq: "gav-resume-2020.pdf" }) {
          publicURL
          uid
        },
        ImageQuery1: file(relativePath: {eq: "headshot.jpg"}) {
          childImageSharp{
            fluid(quality: 100, maxWidth: 164) {
              ...GatsbyImageSharpFluid
            }
            id
          }
        },
      }
    `
  )
  return (
    <>
      <SEO title='About' />
      <ErrorBoundary>
        <Layout>
          <section className='main blurred'>
            <Container>
              <h1 className='section-heading'>About Me</h1>
              <Grid rows='1fr' cols='' gap='4rem'>
                <p> Experienced  Web Developer with a demonstrated history working in many different scopes of the tech industry. Strong design and web development professional with a strong skillset in various related software and technogies including Adobe XD/Ps/Ai, ReactJS, GraphQL, PHP, devops management (GitLab CI), Nginx server management, webpack/babel configuration, and Automated Software Testing with toolings such as Cypress and Selenium. </p>
              </Grid>
              <br />
              <p>View/Download my current resume:</p>
              <Wrapper>
                <a download href={staticQuery.PdfQuery.publicURL}>
                  <Img
                    height='100%'
                    grayscale={true}
                    fluid={staticQuery.ImageQuery0.childImageSharp.fluid}
                    key={staticQuery.PdfQuery.uid}
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