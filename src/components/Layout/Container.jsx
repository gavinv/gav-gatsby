import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const BasicContainer = styled.div `
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  padding-left: 24px;
  padding-right: 24px;
  ${(props) => props.disableGutters && `
    padding-left: 0;
    padding-right: 0;
  `}
`
const Container = React.forwardRef(function Container(props, ref) {
  return (
    <BasicContainer
      className='uiContainer'
      ref={ref}
      {...props}
    />
  )
})

Container.propTypes = {
  children: PropTypes.node.isRequired,
  component: PropTypes.elementType,
  disableGutters: PropTypes.bool,
  // fixed: PropTypes.bool,
  // maxWidth: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', false]),
}

Container.defaultProps = {
  component: 'div',
  disableGutters: false,
  // fixed = false,
}

export default Container
