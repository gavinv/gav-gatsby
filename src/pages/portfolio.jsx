import React from 'react'

import ErrorBoundary from './../components/ErrorBoundary'
import Layout from './../components/Layout/Layout'
import ProjectBlock from './../components/Blocks/ProjectBlock'
import StyledContent from './../components/Blocks/StyledContent'
import StyledImgContainer from './../components/Blocks/StyledImgContainer'
import SEO from './../components/SEO'
import Image from './../components/Image'

export default function Portfolio() {
  return (
    <>
      <SEO title='Portfolio' />
      <ErrorBoundary>
        <Layout>
          <section className='main blurred'>
            <h1 className='section-heading'>A Few Things I've Built</h1>
            <div>
              <ProjectBlock>
                <StyledContent leftCol>
                  <h3>Grid Layouts</h3>
                </StyledContent>
                <StyledImgContainer rightCol>
                  <Image />
                </StyledImgContainer>
              </ProjectBlock>
              <ProjectBlock>
                <StyledImgContainer leftCol>
                  <Image />
                </StyledImgContainer>
                <StyledContent rightCol>
                  <h3>Isabel Valadez Blog Website</h3>
                </StyledContent>
              </ProjectBlock>
            </div>
          </section>
        </Layout>
      </ErrorBoundary>
    </>
  )
}
