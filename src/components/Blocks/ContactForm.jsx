import React from 'react'
import styled from 'styled-components'
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'

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
const BaseFieldset = styled.fieldset`
  line-height: 1.1875em;
  font-size: 1rem;
  border: none;
  display: grid;
  grid-template: 'f l' 1fr 'e p' 1fr 'm m' 2fr 'r s' 0.5fr / 1fr 1fr;
  grid-column-gap: 1.6rem;
  label {
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
  }
`
const BaseFormControl = styled.div`
  line-height: 1.1875em;
  font-size: 1rem;
  &.gavTextArea-root {
    width: 100%;
    grid-area: m;
  }
`
const FormElem = styled.form`
  .reset {
    grid-area: r;
  }
  textarea {
    font-size: 16px;
    color: var(--coral);
    background-color: #73626332;
    border: 1px solid var(--coral);
    display: grid;
    padding: 0.8rem;
    margin-top: 0.32rem;
    margin-bottom: 1em;
    width: 100%;
    border-radius: 16px 16px 4px 16px;
  }
`

function ContactForm(props) {
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
        regEx: /^[A-Za-z0-9 .'?!,@$#-_]*$/,
        error: 'Invalid message format.',
      },
    },
  }

  const onSubmit = event => {
    trackCustomEvent({
      category: "contact form submission",
      action: "click",
      label: "Contact Form Campaign"
    })
    window.location.pathname = '/contact/success'
    
    return event
  }

  function cancelSubmission(e) {
    e.preventDefault()
    window.location.pathname = '/'
  }

  const { state, handleInputChange, handleFormSubmit, disable } = useForm(
    stateSchema,
    validationStateSchema,
    onSubmit
  )

  const errorStyle = {
    color: 'var(--magenta)',
    fontSize: '13px',
  }

  return (
    <>
      <FormElem
        className='gavBaseForm-contact'
        name='contact'
        id='contact-form'
        aria-label='Contact form'
        role='form'
        method='post'
        action='/contact/success'
        data-netlify='true'
        data-netlify-honeypot='bot-field'
        onSubmit={handleFormSubmit}
      >
        <BaseFieldset  form='contact-form' aria-label='Contact form'>
          <legend form='contact-form' aria-label={props.legend}>{props.legend}</legend>
          <input type='hidden' name='name' label='name' />
          <BaseFormControl
            className='gavFormControl-root gavTextField-root'
            aria-label='Text input'
          >
            <TextField
              onChange={handleInputChange}
              type='text'
              name='firstname'
              className={state.isDirty}
              label='First name'
              filled
            />
            {state.firstname.error && (
              <p style={errorStyle}>{state.firstname.error}</p>
            )}
          </BaseFormControl>
          <BaseFormControl className='gavFormControl-root gavTextField-root'>
            <TextField
              onChange={handleInputChange}
              type='text'
              name='lastname'
              className={state.isDirty}
              label='Last name'
              filled
            />
            {state.lastname.error && (
              <p style={errorStyle}>{state.lastname.error}</p>
            )}
          </BaseFormControl>
          <BaseFormControl className='gavFormControl-root gavTextField-root'>
            <TextField
              onChange={handleInputChange}
              type='email'
              name='email'
              className={state.isDirty}
              label='Email'
              filled
            />
            {state.email.error && <p style={errorStyle}>{state.email.error}</p>}
          </BaseFormControl>
          <BaseFormControl className='gavFormControl-root gavTextField-root'>
            <TextField
              onChange={handleInputChange}
              type='phone'
              name='phone'
              className={state.isDirty}
              label='Phone number'
              filled
            />
            {state.phone.error && <p style={errorStyle}>{state.phone.error}</p>}
          </BaseFormControl>
          <BaseFormControl className='gavFormControl-root gavTextArea-root'>
            <label htmlFor='message'>Message</label>
            <textarea
              onChange={handleInputChange}
              rows='5'
              type='text'
              id='message'
              name='message'
              className='input--textarea'
            />
            {state.message.error && (
              <p style={errorStyle}>{state.message.error}</p>
            )}
          </BaseFormControl>
          <Button
            className='reset'
            type='reset'
            aria-label='Reset form'
            height='3.2rem'
            label='Reset'
          />
          <ButtonWrapper>
            <Cancel
              className='gavBaseButton-cancel'
              type='cancel'
              aria-label='Cancel form submission'
              label='&times;'
              rad='24px 8px 24px 24px'
              onClick={e => cancelSubmission(e)}
            />
            <Button
              htmlFor='contact'
              className='gavBaseButton-submit'
              aria-label='Submit form'
              type='submit'
              label='Submit'
              disabled={disable}
              onClick={onSubmit}
            />
          </ButtonWrapper>
        </BaseFieldset>
      </FormElem>
    </>
  )
}

export default ContactForm
