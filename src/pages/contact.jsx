import React from "react"
import styled from 'styled-components'

import ErrorBoundary from './../components/ErrorBoundary'
import Layout from './../components/Layout'
import SEO from './../components/SEO'
import Button from './../components/Button'

const FormPanel = styled.div`
  max-width: 80vw;
  display: inline-grid;
  font-variation-settings: "CASL" 0, "ital" 1;
  a {
    font-weight: 320;
    font-size: 1.32rem;
    transition: 250ms;
    text-decoration: underline dotted 1px; 
    &:hover {
      font-weight: 640;
      font-variation-settings: "CASL" 1 "ital" 1;
    }
  }
  .contact-form {
    display: grid;
    grid-template: 'f l' 1fr 'e p' 1fr 'm m' 2fr 'r r' .5fr 'x s' .5fr / 1fr 1fr;
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
    .cancel {justify-self: end;}
    .submit {justify-self: end;}
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
      border-radius: none;
    }
    textarea {
      border-radius: 16px 16px 4px 16px;
    }
  }
`

const ButtonWrapper = styled.div`
  grid-area: s;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

export default function Contact() {
  return (
    <>
    <SEO title='Contact' />
      <ErrorBoundary>
        <Layout>
        <section className='main blurred'>
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
                <Button className='reset' type="reset" value="reset" 
                  height='3.2rem'
                  label='reset'
                />
              <ButtonWrapper>
                <Button className='cancel' type="cancel" value='cancel'
                  height='3.2rem'
                  width='3.2rem'
                  label='x'
                  rad='24px 8px 24px 24px'
                />
                <Button 
                  htmlFor='contact'
                  className='submit' type="submit" 
                  height='3.2rem' 
                  label='submit'
                />
              </ButtonWrapper>
            </form>
          </FormPanel>
          </section>
        </Layout>
      </ErrorBoundary>
    </>
    )
  }