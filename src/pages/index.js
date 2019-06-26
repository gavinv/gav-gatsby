import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout/layout"
import Spinner from "../components/loading/Spinner"
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

const IndexPage = ({ data }) => (
  <Layout>
    <SEO
      title="Gavin Vaught"
      keywords={[

      ]}
    />
    <div>
      {data.allNodeBasePage.edges.map(({ node }) => (
        <div>
          <h1>{node.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: node.body.value }} />
          <Spinner></Spinner>
        </div>
      ))}
    </div>
  </Layout>
)

export default IndexPage
