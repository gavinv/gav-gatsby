import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
// import Spinner from "../components/loading/Spinner"
import SEO from "../components/seo"
import "../scss/styles.scss"

export const query = graphql`
  query allNodeBasePage {
    allNodeBasePage {
      edges {
        node {
          id
          body {
            value
            summary
          }
        }
      }
    }
  }
`

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="About" keywords={[]} />
    <div>
      {data.allNodeBasePage.edges.map(({ node }) => (
        <div>
          <h1>{node.title}</h1>
          <section className='intro'>

          </section>
          <section className='drupal-content'>
            <div dangerouslySetInnerHTML={{ __html: node.body.value }} />
          </section>
        </div>
      ))}
    </div>
  </Layout>
)

export default AboutPage
