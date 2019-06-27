import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/layout"
// import Spinner from "../components/loading/Spinner"
import PostListing from "../components/PostListing/PostListing"
// import "../scss/styles.scss"

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogsQuery {
    allNodeBlog(limit: 10, sort: { fields: id }) {
      edges {
        node {
          id
          title
          path {
            alias
          }
          body {
            processed
          }
          revision_timestamp(locale: "cst", formatString: "M D YYYY")
          relationships {
            uid {
              name
            }
            field_image {
              localFile {
                url
              }
            }
            field_category {
              name
            }
            field_tags {
              name
            }
          }
        }
      }
    }
  }
`
const Blog = ({ data }) => (
  <Layout>
    <div className="blog-container">
      <PostListing postEdges={data.allNodeBlog.edges} />
    </div>
  </Layout>
)

export default Blog
