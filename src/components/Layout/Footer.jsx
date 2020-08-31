import React from 'react'
import styled from 'styled-components'

import useWindowSize from './../../hooks/useWindowSize'

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
  grid-column: 8 / span 1;
  grid-gap: 2rem;
  align-items: center;
  justify-items: center;
  height: 4rem;
  bottom: 4vh;
  padding: 1.4rem;
  margin-bottom: 1.4rem;
  border-radius: 8px 24px 8px 24px;
  @media screen and (min-width: 640px) {
    right: 4vw;
  }
  @media screen and (max-width: 640px) {
    left: 4vw;
  }
  &&svg {
    width: 1em;
    height: 1em;
  }
`

const Footer = props => {
  const viewport = useWindowSize()
  if (viewport.width >= 640)
    return (
      <>
        <FooterElem {...props}>
          <FooterInner className='blurred'>{props.children}</FooterInner>
        </FooterElem>
      </>
    )
  else
    return null
}

export default Footer
