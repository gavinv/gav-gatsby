import React from "react"
import Layout from "../components/layout/layout"
import styled from 'styled-components'
import SEO from "../components/seo"
import "../scss/styles.scss"

const IntroText = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  margin: 3rem 1rem;
  height: 72vh;
  span {
    font-size: 2.4em;
    display: block;
  }
  &> span.intro-name {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: baseline;
    align-self: center;
  }
  span.intro-byline {
    align-self: flex-end;
  }
`
const Index = styled.div`
  height: 100vh;
  background-color: var(--primary);
  overflow: hidden;
`

const IndexPage = () => {
  return (
    <>
    <SEO title="Gavin Vaught" keywords={[]} />
    <Index className='index-main'>
      <Layout>
        <IntroText className='intro-text'>
          <span className='intro-first'>Hello, world! </span>
          <span className='intro-name'>I'm &nbsp;<h1>Gavin Vaught</h1></span>
          <span className='intro-byline'>Website Designer & Developer</span>
        </IntroText>
      </Layout>
    </Index>
    </>
  )
}

export default IndexPage
