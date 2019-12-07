import React from "react"
import styled from 'styled-components'

import ErrorBoundary from './../components/ErrorBoundary'
import Layout from './../components/Layout'
import SEO from './../components/SEO'

const FormPanel = styled.div`
  max-width: 80vw;
  margin: 0 auto;
  display: inline-grid;
  height: 64vh;
  width: 40vw;
  margin: 0 auto;
  background-color: #63636333;
  backdrop-filter: blur(8px) brightness(88%) contrast(104%);
  border-radius: 8px 24px 8px 24px;
  a {
    font-family: Roboto, Ubuntu, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 300;
    font-size: 24px;
  }
  .contact-form {
    display: grid;
    grid-template: 'f l' 1fr 'e p' 1fr 'm m' 2fr 'r r' .5fr / 1fr 1fr;
    grid-column-gap: .4em;
    label {
      font-size: 12px;
      margin: 0 auto;
      width: 80%;
      &[for='firstname'] {grid-area: f;}
      &[for='lastname'] {grid-area: l;}
      &[for='email'] {grid-area: e;}
      &[for='phone'] {grid-area: p;}
      &[for='message'] {grid-area: m;}
    }
    .reset {grid-area: r; width: 24%;}
    .cancel {}
    .submit {}
    input:-internal-autofill-selected {
      background-color: var(--beige) !important;
    }
    input,
    textarea {
      font-size: 16px;
      color: var(--coral);
      background-color: transparent;
      border: 1px solid var(--coral);
      display: grid;
      padding: .8rem 0;
      width: 100%;
    }
    input {
      border: none;
      border-bottom: 1px solid var(--coral);
    }
  }
`

export default function Contact() {
  return (
    <>
    <SEO title='Contact' />
      <ErrorBoundary>
        <Layout>
          <FormPanel>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
              <span>
                <p>call/text:</p>
                <a href='tel:+12108441520'>+1 210.844.1520</a>
              </span>
              <span>
                <p>email:</p>
                <a href='mailto:gavinvaught@gmail.com'>gavinvaught@gmail.com</a>
              </span>
            </div>
            <p>...or drop me a message from right here:</p>
            <form
              className='contact-form' 
              name='contact' 
              method="post" 
              action="#"
            >
              <label htmlFor='firstname'>
                First name
                <input type="text" name="firstname" className='input--text' />
              </label>
              <label htmlFor='lastname'>
                Last name
                <input type="text" name="lastname" className='input--text' />
              </label>
              <label htmlFor='email'>
                Email
                <input type="email" name="email" className='input--email' />
              </label>
              <label htmlFor='phone'>
                Phone
                <input type="phone" name="phone" className='input--phone' />
              </label>
              <label htmlFor='message'>
                Message
                <textarea 
                  name="message" 
                  rows="5" 
                  className='input--textarea'
                />
              </label>
              <input className='reset' type="reset" value="Reset" />
              <button className='cancel' type="cancel">x</button>
              <button className='submit' type="submit">Submit</button>
            </form>
          </FormPanel>
        </Layout>
      </ErrorBoundary>
    </>
    )
  }