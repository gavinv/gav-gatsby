import React from 'react'
import styled from 'styled-components'

const FooterElem = styled.footer`
  
`

const Footer = props => {
  return (
    <>
      <FooterElem className='footer blurred' {...props}>
        { props.children }
      </FooterElem>
    </>
  )
}

export default Footer
