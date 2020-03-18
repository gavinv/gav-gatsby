import styled, { css } from 'styled-components'

const StyledImgContainer = styled.a`
  box-shadow: rgba(2, 12, 27, 0.7) 0px 10px 30px -15px;
  ${props =>
    props.rightCol &&
    css`
      grid-area: 1 / 6 / -1 / -1;
    `}
  ${props =>
    props.leftCol &&
    css`
      grid-area: 1 / 1 / -1 / 7;
    `}
  position: relative;
  z-index: 1;
  background-color: #121212;
  border-radius: 4px;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
`

export default StyledImgContainer
