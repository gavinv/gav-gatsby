import React from 'react'
import styled from 'styled-components'

import Link from './../Link'
import VariLogo from './../VariLogo'
import useWindowSize from './../../hooks/useWindowSize'

const Wrapper = styled.div`
  a {
    font-size: 1rem;
    font-weight: 300;
    transition: 256ms;
    text-decoration: underline dotted;
    font-variation-settings: 'CASL' 0;
  }
`

const Nav = styled.nav`
  padding: 2rem;
`

const MainNav = (props) => {
  const viewport = useWindowSize()
  return (
    <>
      <Nav className='mainnavigation blurred' role='navigation'>
        <Link to='/' className='gav-expanded-container' aria-label='Home page'>
          <VariLogo viewport={viewport.width} />
        </Link>
        <Wrapper className='pages'>
          <Link to='about' className='about menu-item'>
            About
          </Link>
          <Link to='.' className='projects menu-item' disabled>
            Projects
          </Link>
          {/* <Link to='.' className='misc menu-item' disabled>
            Misc.
          </Link> */}
          <Link to='.' className='blog menu-item' disabled>
            Blog
          </Link>
          <Link to='contact' className='contact menu-item'>
            Contact
          </Link>
        </Wrapper>
      </Nav>
    </>
  )
}

export default MainNav
