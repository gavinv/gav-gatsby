import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const BaseLabel = styled.label`
  position: absolute;
  transform: translate(16px, 8px) scale(1);
  margin: 0.8rem auto;
  transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
    transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  &[data-shrink='true'] {
    transform: translate(16px, -8px) scale(0.64);
    transform-origin: top left;
  }
`

const BaseInputField = styled.input`
  display: inline-grid;
  position: relative;
  width: 100%;
  margin-top: 0.32rem;
  align-items: center;
  font-family: ${props =>
    props.monospace
      ? 'var(--font-family-monospace)'
      : 'var(--font-family-sans-serif)'};
  font-size: ${props => props.fontSize || '1rem'};
  color: ${props => props.fg || 'var(--coral)'};
  cursor: text;
  border: none;
  border-bottom: 1px double var(--coral);
  :-internal-autofill-selected {
    background-color: var(--beige) !important;
  }
  ${props =>
    props.filled &&
    css`
      padding: 16px 8px 8px 16px;
      background-color: #73626332;
      border-radius: 8px 8px 0 0;
    `}
  ${props =>
    props.disabled &&
    css`
      color: var(--beige);
      border: 1px dotted var(--beige);
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
      focus: null,
    }
  }

  handleFocus = (e, { ...props }) => {
    props.diabled
      ? e.stopPropogation()
      : this.setState({
          focus: true
        })
  }

  handleChange = e => {
    this.props.onChange(e.target.value)
  }

  handleBlur = e => {
    this.setState(prevState => ({
      focus: !prevState.focus,
    }))
  }

  render() {
    return (
      <>
        <BaseLabel
          data-shrink={this.state.focus || this.state.dirty}
          className='gavInputLabel-root'
          htmlFor={this.props.name}
        >
          {this.props.label}
        </BaseLabel>
        <BaseInputField
          className='gavInputBase-root gavInput-root'
          onFocus={this.handleFocus}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          name={this.props.label}
          {...this.props}
        />
      </>
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
