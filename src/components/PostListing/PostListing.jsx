import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

class PostListing extends React.Component {
  getPostList() {
    const postList = []
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.path.alias,
        tags: postEdge.node.relationships.field_tags,
        cover: postEdge.node.relationships.field_image.localFile.publicURL,
        title: postEdge.node.title,
        date: postEdge.node.revision_timestamp,
        excerpt: postEdge.node.body.summary,
        // timeToRead: postEdge.node.timeToRead
      })
    })
    return postList
  }
  render() {
    const query = graphql`
      query MyQuery {
        imageSharp {
          fluid {
            ...GatsbyImageSharpFluid__tracedSVG
            src
          }
        }
      }
    `
    const postList = this.getPostList()
    const src = postList.cover
    const imageOverrides = { ...query, src }

    return (
      <div>
        {" "}
        {/* Your post list here. */
        postList.map(post => (
          <>
            <Img fluid={imageOverrides} />
            <Link to={post.path} key={post.title}>
              <h1> {post.title} </h1>
            </Link>
          </>
        ))}
      </div>
    )
  }
}
export default PostListing
