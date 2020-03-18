import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const BaseTextField = styled.input`
  font-family: ${props =>
    props.monospace
      ? 'var(--font-family-monospace)'
      : 'var(--font-family-sans-serif)'};
  color: ${props => props.fg || 'var(--coral)'};
  font-size: ${props => props.fontSize || 'var(--base-fontsize)'};
  line-height: 1.1875em;
  position: relative;
  cursor: text;
  display: inline-grid;
  align-items: center;
  ${props =>
    props.disabled &&
    css`
      color: var(--beige);
      cursor: default;
    `}
  ${props =>
    props.multiline &&
    css`
      padding: ${8 - 2}px 0 ${8 - 1}px;
      ${props =>
        (props.margin = 'dense') &&
        css`
          padding-top: 4 - 1;
        `}
    `}
  ${props =>
    props.fullWidth &&
    css`
      width: 100%;
    `}

`
class TextField extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dirty: null,
      focus: null,
      valid: null,
    }
  }

  handleFocus = e => {
    this.setState({
      focus: true,
    })
  }

  handleChange = e => {
    this.props.onChange(e.target.value)
    this.setState({
      dirty: true,
    })
  }

  handleBlur = e => {
    this.setState(prevState => ({
      focus: !prevState.focus,
    }))
  }

  checkValidity(e) {
    // This is a VERY basic implementation of validation. Will need to beef it up in later iterations.
    let value = e.target.value
    let bool = null
    if (typeof value !== String && value.length > 0) {
      bool = true
    } else {
      bool = false
    }

    this.setState({
      valid: bool,
    })
  }

  render() {
    return (
      <BaseTextField
        onFocus={this.handleFocus}
        onChange={this.handleChange}
        onBlur={this.handleBlur}
        valid={e => this.checkValidity(e)}
        {...this.props}
      />
    )
  }
}

TextField.propTypes = {
  multiline: PropTypes.bool,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  margin: PropTypes.oneOf(['dense', 'none']),
}

TextField.defaultProps = {
  multiline: false,
  fullWidth: false,
  disabled: false,
}

export default TextField