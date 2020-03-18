import React from 'react'
import styled from 'styled-components'

const FooterElem = styled.footer`
  display: grid;
  grid-template-columns: repeat(8, auto);
  max-width: 88vw;
  margin: 0 auto;
`

const FooterInner = styled.div`
  display: inline-grid;
  width: 100%;
  max-width: 100vw;
  grid-template-columns: repeat(4, 1fr);
  grid-column: 8 / 9;
  grid-gap: 2rem;
  align-items: center;
  justify-items: center;
  height: 4rem;
  bottom: 4vh;
  padding: 1.4rem;
  border-radius: 8px 24px 8px 24px;
  @media screen and (min-width: 640px) {
    right: 4vw;
  }
  @media screen and (max-width: 640px) {
    left: 4vw;
  }
`

const Footer = props => {
  return (
    <>
      <FooterElem {...props}>
        <FooterInner className="blurred">
          { props.children }
        </FooterInner>
      </FooterElem>
    </>
  )
}

export default Footer
