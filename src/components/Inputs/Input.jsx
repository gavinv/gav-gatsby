import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const BaseInput = styled.input`

`

const BaseTextarea = styled.textarea`

`

class Input extends React.Component {
  constructor(props) {
    super(props)
  }

  handleChange = e => {
    this.props.onChange(e.target.value)
  }

  render() {
    return (
      <BaseInput
        value={this.props.value}
        onChange={this.handleChange}
        {...this.props}
      />
    )
  }
}

Input.propTypes = {
  multiline: PropTypes.bool,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  margin: PropTypes.oneOf(['dense', 'none']),
}

Input.defaultProps = {
  multiline: false,
  fullWidth: false,
  disabled: false,
}

export default Input
