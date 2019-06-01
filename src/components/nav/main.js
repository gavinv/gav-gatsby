import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link
      to={props.to}
      style={{
        color: `white`,
        textDecoration: `none`,
      }}
    >{props.children}</Link>
  </li>
)


const MainNav = ({ children, siteTitle }) => (
  <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
    <ul style={{ listStyle: `none`, float: `right` }}>
      <ListLink to="/about/">About</ListLink>
      <ListLink to="/skills/">Skills</ListLink>
      <ListLink to="/work/">Work</ListLink>
      <ListLink to="/blog/">Blog</ListLink>
      <ListLink to="/contact/">Contact</ListLink>
    </ul>
    {children}
  </div>
)

MainNav.propTypes = {
  siteTitle: PropTypes.string,
}

MainNav.defaultProps = {
  siteTitle: ``,
}

export default MainNav
