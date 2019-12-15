import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const BaseInput = styled.input`
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

const Input = React.forwardRef(function Input(props, ref) {
  return (
    <BaseInput
      ref={ref}
      {...props}
    />
  )
})

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
