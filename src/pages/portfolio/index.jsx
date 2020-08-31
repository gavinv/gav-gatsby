import React from 'react'

import ErrorBoundary from './../../components/ErrorBoundary'
import Layout from './../../components/Layout/Layout'
import ProjectBlock from './../../components/Blocks/ProjectBlock'
import Grid from './../../components/Layout/Grid'
import SEO from './../../components/SEO'
import Image from './../../components/Image'
import Link from './../../components/Link'


export default function Portfolio() {
  return (
    <>
      <SEO title='Portfolio' />
      <ErrorBoundary>
        <Layout>
          <section className='main blurred'>
            <h1 className='section-heading'>A Few Things I've Built</h1>
            <div style={{ 'margin': '0 auto' }}>
            {/* <ProjectBlock>
                <Grid rows='1fr' cols='1fr 1fr' area='1 / 1 / -1 / -1' gap='4rem'>
                  <h3>Save the Buffer</h3>
                  <Image />
                </Grid>
              </ProjectBlock> */}
              <Link to='portfolio/design-docs'>
              <ProjectBlock>
                  <Grid rows='1fr' cols='1fr 1fr' area='1 / 1 / -1 / -1' gap='4rem'>
                    <Image />
                    <h3>Custom Design Docs (WIP)</h3>
                  </Grid>
              </ProjectBlock>
              </Link>
            </div>
          </section>
        </Layout>
      </ErrorBoundary>
    </>
  )
}
