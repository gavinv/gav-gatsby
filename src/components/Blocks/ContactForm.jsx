import React from 'react'
import styled from 'styled-components'

import Button from './../Inputs/Button'
import TextField from './../Inputs/TextField'

import useForm from './../../hooks/useForm'

const ButtonWrapper = styled.div`
  grid-area: s;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`
const Cancel = styled(Button)`
  font-weight: 256;
  font-size: 2rem;
  width: 3.2rem;
  line-height: 0;
  :hover {
    font-weight: 564;
  }
`

const FormElem = styled.form`
  display: grid;
  grid-template: 'f l' 1fr 'e p' 1fr 'm m' 2fr 'r s' 0.5fr / 1fr 1fr;
  grid-column-gap: 1.6rem;
  label {
    font-size: 12px;
    margin: 0.8rem auto;
    width: 100%;
    &[for='firstname'] {
      grid-area: f;
    }
    &[for='lastname'] {
      grid-area: l;
    }
    &[for='email'] {
      grid-area: e;
    }
    &[for='phone'] {
      grid-area: p;
    }
    &[for='message'] {
      grid-area: m;
    }
  }
  .reset {
    grid-area: r;
  }
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
    padding: 0.8rem;
    margin-top: 0.32rem;
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

function ContactForm() {
  const stateSchema = {
    firstname: { value: '', error: '' },
    lastname: { value: '', error: '' },
    email: { value: '', error: '' },
    phone: { value: '', error: '' },
    message: { value: '', error: '' },
  }

  const validationStateSchema = {
    firstname: {
      required: true,
      validator: {
        regEx: /^[a-zA-Z]+$/,
        error: 'Invalid first name format.',
      },
    },
    lastname: {
      required: true,
      validator: {
        regEx: /^[a-zA-Z]+$/,
        error: 'Invalid last name format.',
      },
    },
    email: {
      required: true,
      validator: {
        regEx: /^[A-Z0-9._-]+@[A-Z0-9.-]+\.[A-Z0-9.-]+$/i,
        error: 'Invalid email format.',
      },
    },
    phone: {
      required: false,
      validator: {
        regEx: /((\(\d{3}\)?)|(\d{3}))([\s-./]?)(\d{3})([\s-./]?)(\d{4})/,
        error: 'Invalid phone format.',
      },
    },
    message: {
      required: true,
      validator: {
        regEx: /^[A-Za-z0-9 .'?!,@$#-_]+$/,
        error: 'Invalid message format.',
      },
    },
  }

  function onSubmission(state) {
    window.location.pathname = '/success'
  }

  function cancelSubmission(e) {
    e.preventDefault()
    window.location.pathname = '/'
  }

  const { state, handleFormChange, handleFormSubmit, disable } = useForm(
    stateSchema,
    validationStateSchema,
    onSubmission
  )

  const errorStyle = {
    color: 'var(--magenta)',
    fontSize: '13px',
  }

  return (
    <>
      <FormElem
        className='contact-form'
        name='contact'
        method='post'
        action='/success'
        data-netlify='true'
        data-netlify-honeypot='bot-field'
        onSubmit={handleFormSubmit}
      >
        <input type='hidden' name='form-name' value='contact' />
        <label htmlFor='firstname'>
          First name
          <TextField
            onChange={handleFormChange}
            type='text'
            name='firstname'
            className='input--text'
          />
        </label>
        {state.firstname.error && (
          <p style={errorStyle}>{state.firstname.error}</p>
        )}
        <label htmlFor='lastname'>
          Last name
          <TextField
            onChange={handleFormChange}
            type='text'
            name='lastname'
            className='input--text'
          />
        </label>
        {state.lastname.error && (
          <p style={errorStyle}>{state.lastname.error}</p>
        )}
        <label htmlFor='email'>
          Email
          <TextField
            onChange={handleFormChange}
            type='email'
            name='email'
            className='input--email'
          />
        </label>
        {state.email.error && <p style={errorStyle}>{state.email.error}</p>}
        <label htmlFor='phone'>
          Phone
          <TextField
            onChange={handleFormChange}
            type='phone'
            name='phone'
            className='input--phone'
          />
        </label>
        {state.phone.error && <p style={errorStyle}>{state.phone.error}</p>}
        <label htmlFor='message'>
          Message
          <textarea
            onChange={handleFormChange}
            rows='5'
            name='message'
            className='input--textarea'
          />
        </label>
        {state.message.error && <p style={errorStyle}>{state.message.error}</p>}
        <Button className='reset' type='reset' height='3.2rem' label='Reset' />
        <ButtonWrapper>
          <Cancel
            className='cancel'
            type='cancel'
            label='&times;'
            rad='24px 8px 24px 24px'
            onClick={e => cancelSubmission(e)}
          />
          <Button
            htmlFor='contact'
            className='submit'
            type='submit'
            label='Submit'
            disabled={disable}
          />
        </ButtonWrapper>
      </FormElem>
    </>
  )
}

export default ContactForm
