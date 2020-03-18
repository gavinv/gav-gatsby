import React from 'react'
import styled from 'styled-components'

const Elem = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  margin-bottom: 100px;
`

export default function ProjectBlock(props) {
  return <Elem>{props.children}</Elem>
}
