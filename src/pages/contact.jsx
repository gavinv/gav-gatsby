import React from 'react'
import styled from 'styled-components'

import ErrorBoundary from './../components/ErrorBoundary'
import Layout from './../components/Layout/Layout'
import SEO from './../components/SEO'
import ContactForm from './../components/Blocks/ContactForm'

const FormPanel = styled.div`
  max-width: 80vw;
  display: block;
  margin: 2rem;
  font-variation-settings: 'CASL' 0, 'ital' 1;
  a {
    font-weight: 320;
    font-size: 1.2rem;
    transition: 250ms;
    text-decoration: underline dotted 1px;
    &:hover {
      font-weight: 640;
      font-variation-settings: 'CASL' 1 'ital' 1;
    }
  }
  .contact-form {
  }
`

export default function Contact() {
  return (
    <>
      <SEO title='Contact' />
      <ErrorBoundary>
        <Layout>
          <section className='main blurred'>
            <FormPanel>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                <span>
                  <p>call/text:</p>
                  <a href='tel:+12108441520'>+1 210.844.1520</a>
                </span>
                <span>
                  <p>email:</p>
                  <a href='mailto:gavinvaught@gmail.com'>
                    gavinvaught@gmail.com
                  </a>
                </span>
              </div>
              <p>...or drop me a message from right here:</p>
              <ContactForm />
            </FormPanel>
          </section>
        </Layout>
      </ErrorBoundary>
    </>
  )
}
