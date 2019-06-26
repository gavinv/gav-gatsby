
import React from "react"
import { Link } from "gatsby"

class PostListing extends React.Component {
  getPostList() {
    const postList = []
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.path.alias,
        tags: postEdge.node.relationships.field_tags,
        cover: postEdge.node.relationships.field_image.localFile.url,
        title: postEdge.node.title,
        date: postEdge.node.revision_timestamp,
        excerpt: postEdge.node.body.summary
        // timeToRead: postEdge.node.timeToRead
      })
    })
    return postList
  }
  render() {
    const postList = this.getPostList();
    return (
      <div> {
        /* Your post list here. */
        postList.map(post => (
          <Link to = {post.path} key = {post.title}>
            <img style={{
              width: '33%',
              height: 'auto'
            }} src={post.cover} alt=""></img>
            <h1> {post.title} </h1>
          </Link>
        ))}
      </div>
    );
  }
}

export default PostListing;
