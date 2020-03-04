import styled, { css } from 'styled-components'

const Elem = styled.div`
  position: relative;
  ${props =>
    props.leftCol &&
    css`
      grid-area: 1 / 1 / -1 / 7;
    `}
  ${props =>
    props.rightCol &&
    css`
      grid-area: 1 / 6 / -1 / -1;
    `}
`

export default Elem
