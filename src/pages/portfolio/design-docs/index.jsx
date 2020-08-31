import React from 'react'

import ErrorBoundary from './../../../components/ErrorBoundary'
import Layout from './../../../components/Layout/Layout'
import SEO from './../../../components/SEO'
import Link from './../../../components/Link'
import List from './../../../components/Blocks/List'

export default function DesignDocs() {
  return (
    <>
      <SEO title='Design Docs' />
      <ErrorBoundary>
        <Layout>
          <section className='main blurred'>
            <h1>Branding &amp; Style Guide</h1>
            <h2>Purpose</h2>
            <p>
              This guide is used to document, and serve as a reference of design
              initiatives on this website. A coherent user-centered experience
              is vital to the success of online projects, regardless of focus.
              This extends well beyond aesthetic concerns, and helps reinforce
              the ethos of clarity, open communication, and consistent
              wayfinding. This is extended through every aspect of the design,
              whether typography, tone of writing, color, or negative space. To
              further enhance the audience scope, accessibility is accounted for
              in the design, and structure, taking a ground-up approach—not
              added later.
            </p>
            <p>
              <Link to='/'>GavinVaught.com</Link> is built using{' '}
              <a
                href='https://styled-components.com/'
                alt='styled-components website.'
                class='styled'
              >
                styled-components
              </a>{' '}
              in addition to React to create component-based style elements.
              This front-end style guide documents the design components and
              their props, functions, and mixins used to build the site. As this
              is a living document, periodic updates will be made, as the
              project grows and advances.
            </p>
            <p>
              <h3>How this styleguide differs from many others:</h3>
              <p>
                Beside the style guide-specific elements, such as the layout and
                organization of this guide, all styling and documentaiton
                contained within are actual code. Whenever there are changes
                and/or elements added, they will be automatically reflected in
                this guide.
              </p>
            </p>
            <h2>Organization</h2>
              <List>
                <li>
                  Defaults: These are the default base styles applied to HTML elements using a styled-components Theme class.
                </li>
                <li>
                  Layouts: The layout styling for major parts of the page that are included with the theme.
                </li>
                <li>
                  Inputs: Form components are specialized design components that are applied to forms or form elements.
                </li>
                <li>
                  Blocks: Simple, reusable React components that can quickly be included into a document.
                </li>
                <li>
                  Colors and styled-components: Colors used throughout the site and the styled-component props, etc.
                </li>
              </List>
              <p>
                Each styled React component is styled using importing styled-components and creating a constant with the <code>styled</code> method that contains the CSS styles.
              </p>
            <h3>Notice</h3>
            <p>
              Since this is a living styleguide, some elements may be
              incomplete, due to the iterative nature of components. Changes
              appear on a periodic basis, as is noted by the version number and
              build date.
            </p>
          </section>
        </Layout>
      </ErrorBoundary>
    </>
  )
}
