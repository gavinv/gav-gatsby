import React from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout/Layout'
import ErrorBoundary from './../components/ErrorBoundary'
import Button from '../components/Inputs/Button'
import Link from '../components/Link'
import SEO from '../components/SEO'
import useWindowSize from '../hooks/useWindowSize'

const HomepageButton = styled(Button)`
  height: 4rem;
  width: 8rem;
`

function Buttons() {
  const viewport = useWindowSize().width
  if (viewport <= 640) {
    return (
      <>
        <Link to='contact'>
          <Button
            bg='var(--coral)'
            fg='var(--beige)'
            fx='none'
            rad='24px 8px 24px 24px'
            label='Contact me'
          />
        </Link>
      </>
    )
  } else {
    return (
      <>
        <Link to='about'>
          <HomepageButton bg='var(--violet)' fg='var(--coral)' label='About' />
        </Link>
        <Link to='portfolio'>
          <HomepageButton
            bg='var(--magenta)'
            fg='var(--coral)'
            rad='24px 8px 24px 24px'
            label='Portfolio'
            disabled
          />
        </Link>
        <Link to='blog'>
          <HomepageButton
            bg='var(--orange)'
            fg='var(--coral)'
            rad='24px 24px 24px 8px'
            label='Blog'
            disabled
          />
        </Link>
        <Link to='contact'>
          <HomepageButton
            fg='var(--beige)'
            bg='var(--yellow)'
            rad='24px 24px 8px 24px'
            label='Contact'
          />
        </Link>
      </>
    )
  }
}

const IndexPage = () => {
  return (
    <>
      <SEO title='Gavin Vaught' />
      <ErrorBoundary>
        <Layout>
          <section className='grid col-2'>
            <div className='homepage-content'>
              <h1 className='heading'>Gavin Vaught</h1>
              <div className='content sub-heading'>
                <span>web developer</span>
                <span className='corner-ampersand'>&</span>
                <span className='sideways'>designer</span>
                <div className='homepage-navigation'>
                  {Buttons(useWindowSize)}
                </div>
              </div>
            </div>
            <svg
              className='gavlogo'
              xmlns='http://www.w3.org/2000/svg'
              width='377.477'
              height='494'
              viewBox='0 0 377.477 494'
            >
              <g transform='translate(8.728 6.5)'>
                <g transform='translate(0 -0.166)'>
                  <path
                    className='gavlogo-path'
                    d='M370.74,377.89l-178.889-360L10.74,377.89'
                    transform='translate(-10.74 -17.724)'
                  />
                  <path
                    className='gavlogo-path'
                    d='M370.74,134.779l-180,351.111-180-360'
                    transform='translate(-10.74 -4.724)'
                  />
                  <path
                    className='gavlogo-path'
                    d='M84.563,217.907H327.506'
                    transform='translate(-4.209 -17.74)'
                  />
                </g>
                <path
                  className='gavlogo-path'
                  d='M321.4,216.209v79.859c-18.668,36.2-79.878,77.871-136.758,77.563C122.17,373.292,79.736,341.74,44.71,296.068S17.561,174.325,17.561,174.325,15.122,138.1,44.71,94.188s89.672-76.9,139.932-72.5,97.552,11.786,136.758,72.5'
                  transform='translate(-3.315 -11.907)'
                />
              </g>
            </svg>
          </section>
        </Layout>
      </ErrorBoundary>
    </>
  )
}

export default IndexPage
