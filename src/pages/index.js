import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/basic/basic-layout"
import SEO from "../components/seo"

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

const IndexPage = ({ data }) => (
  <Layout>
    <SEO
      title="Gavin Vaught"
      keywords={[
        `gatsby`,
        `application`,
        `react`,
        "gavin vaught",
        "developer",
        "drupal",
        "decoupled",
      ]}
    />
    <div>
      {data.allNodeBasePage.edges.map(({ node }) => (
        <div>
          <h1>{node.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: node.body.value }} />
        </div>
      ))}
    </div>
  </Layout>
)

export default IndexPage
