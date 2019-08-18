import { graphql } from "gatsby"

export default imageQuery = query =>
  graphql`
    query {
      childImageSharp {
        resize(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  `
