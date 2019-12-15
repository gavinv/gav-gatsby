import React from 'react'
import styled from 'styled-components'

export const BasicBox = styled.div`
  margin: ${props => (props.m ? (props.m * 8) : '8')}px;
  padding: ${props => (props.p ? (props.p * 8) : '8')}px;
  background-color: ${props => (props.bg ? props.bg : 'var(--light)')};
  color: ${props => (props.fg ? props.fg : 'var(--dark)')};
`

const Box = props => {
  return (
    <BasicBox className='uiBox' p={props.p} m={props.m}>
      {props.children}
    </BasicBox>
  )
}
export default Box