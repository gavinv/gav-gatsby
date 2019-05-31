import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/base/basic-layout"
import SEO from "../components/seo/seo"

export const query = graphql`
  query allNodeBasePage {
    allNodeBasePage {
      edges {
        node {
          id
          title
          body {
            value
            format
            processed
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
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
