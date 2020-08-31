import React from 'react'
import styled from 'styled-components'

const BasicGrid = styled.div`
  display: ${props => (props.inline ? 'inline-grid' : 'grid')};
  grid-area: ${props => (props.area ? props.area : 'mone')};
  grid-template-columns: ${props => (props.cols ? props.cols : 'auto')};
  grid-template-rows: ${props => (props.rows ? props.rows : 'auto')};
  grid-gap: ${props => (props.gap ? props.gap : 'none')};
`

const Grid = props => {
  return (
    <BasicGrid className='uiGrid' {...props}>
      {props.children}
    </BasicGrid>
  )
}

export default Grid