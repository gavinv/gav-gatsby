import { useState, useEffect, useCallback } from 'react'

function useForm(stateSchema, validationSchema = {}, callback) {
  const [state, setState] = useState(stateSchema)
  const [disable, setDisable] = useState(true)
  const [isDirty, setIsDirty] = useState(false)

  useEffect(() => {
    setDisable(true)
  }, [])

  useEffect(() => {
    if (isDirty) {
      setDisable(validateState())
    }
  }, [state, isDirty])

  const validateState = useCallback(() => {
    const hasErrorInState = Object.keys(validationSchema).some((key) => {
      const isInputFieldRequired = validationSchema[key].required
      const stateValue = state[key].value
      const stateError = state[key].error

      return (isInputFieldRequired && !stateValue) || stateError
    })

    return hasErrorInState
  }, [state, validationSchema])

  const handleInputChange = useCallback(
    (event) => {
      setIsDirty(true)

      const name = event.target.name
      const value = event.target.value

      let error = ''
      if (validationSchema[name].required) {
        if (!value) {
          error = 'This is required field.'
        }
      }

      if (
        validationSchema[name].validator !== null &&
        typeof validationSchema[name].validator === 'object'
      ) {
        if (value && !validationSchema[name].validator.regEx.test(value)) {
          error = validationSchema[name].validator.error
        }
      }

      setState((prevState) => ({
        ...prevState,
        [name]: { value, error },
      }))
    },
    [validationSchema]
  )

  const handleFormSubmit = useCallback(
    (event) => {
      event.preventDefault()
      if (!validateState()) {
        callback(state)
      }
    },
    [state]
  )

  return { state, disable, handleInputChange, handleFormSubmit }
}

export default useForm
