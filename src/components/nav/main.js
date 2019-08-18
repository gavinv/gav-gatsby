import React from "react"
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

const MainNav = ({ children }) => (
  <ul style={{ listStyle: `none`, float: `right` }}>
    <ListLink to="/about/">About</ListLink>
    {/*<ListLink to="/skills/">Skills</ListLink>*/}
    <ListLink to="/work/">Work</ListLink>
    <ListLink to="/blog/">Blog</ListLink>
    <ListLink to="/contact/">Contact</ListLink>
    {children}
  </ul>
)

export default MainNav
