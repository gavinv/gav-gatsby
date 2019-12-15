import React from "react"
import styled from 'styled-components'

import ErrorBoundary from './../components/ErrorBoundary'
import Layout from './../components/Layout'
import SEO from './../components/SEO'
import Button from './../components/Inputs/Button'
import Input from './../components/Inputs/Input'

const FormPanel = styled.div`
  max-width: 80vw;
  display: inline-grid;
  font-variation-settings: "CASL" 0, "ital" 1;
  a {
    font-weight: 320;
    font-size: 1.2rem;
    transition: 250ms;
    text-decoration: underline dotted 1px;
    &:hover {
      font-weight: 640;
      font-variation-settings: "CASL" 1 "ital" 1;
    }
  }
  .contact-form {

  }
`

const ButtonWrapper = styled.div`
  grid-area: s;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`
const Cancel = styled(Button)`
  font-weight: 256;
  font-size: 3.2rem;
  width: 3.2rem;
  line-height: 0;
  :hover {
    font-weight: 564;
  }
`

const ContactForm = styled.form`
  display: grid;
    grid-template: 'f l' 1fr 'e p' 1fr 'm m' 2fr 'r s' .5fr / 1fr 1fr;
    grid-column-gap: 1.6rem;
    label {
      font-size: 12px;
      margin: .8rem auto;
      width: 100%;
      &[for='firstname'] {grid-area: f;}
      &[for='lastname'] {grid-area: l;}
      &[for='email'] {grid-area: e;}
      &[for='phone'] {grid-area: p;}
      &[for='message'] {grid-area: m;}
    }
    .reset {grid-area: r;}
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
      padding: .8rem;
      margin-top: .32rem;
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
`

export default function Contact() {
  return (
    <>
    <SEO title='Contact'/>
      <ErrorBoundary>
        <Layout>
        <section className='main blurred'>
          <FormPanel>
            <p style={{display: 'grid', gridTemplateColumns: '1fr 1fr'}}>
              <span>
                <div>call/text:</div>
                <a href='tel:+12108441520'>+1 210.844.1520</a>
              </span>
              <span>
                <div>email:</div>
                <a href='mailto:gavinvaught@gmail.com'>gavinvaught@gmail.com</a>
              </span>
            </p>
            <p>...or drop me a message from right here:</p>
            <ContactForm
              className='contact-form'
              name='contact'
              method="post"
              action="/success"
              data-netlify="true" data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="form-name" value="contact" />
              <label htmlFor='firstname'>
                First name
                <Input type="text" name="firstname" className='input--text' />
              </label>
              <label htmlFor='lastname'>
                Last name
                <Input type="text" name="lastname" className='input--text' />
              </label>
              <label htmlFor='email'>
                Email
                <Input type="email" name="email" className='input--email' />
              </label>
              <label htmlFor='phone'>
                Phone
                <Input type="phone" disabled name="phone" className='input--phone' />
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
                  label='Reset'
                />
              <ButtonWrapper>
                <Cancel className='cancel' type="cancel" value='cancel'
                  label='&times;'
                  rad='24px 8px 24px 24px'
                />
                <Button
                  htmlFor='contact'
                  className='submit' type="submit"
                  label='Submit'
                />
              </ButtonWrapper>
            </ContactForm>
          </FormPanel>
          </section>
        </Layout>
      </ErrorBoundary>
    </>
    )
  }