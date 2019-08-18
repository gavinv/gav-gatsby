/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import Header from "../header"
import "./layout.css"

const MainContent = styled.main`
  max-width: 80vw;
`
const Footer = styled.footer`
  width: 100vw;
  height: 16vh;
`
const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header className='main-nav' siteTitle={data.site.siteMetadata.title} />
        <MainContent className='main-content'>{children}</MainContent>
        <Footer className='footer-main'>
          © {new Date().getFullYear()}, Built by Gavin Vaught with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a> & <a href="https://www.drupal.org">Drupal 8</a>
        </Footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
