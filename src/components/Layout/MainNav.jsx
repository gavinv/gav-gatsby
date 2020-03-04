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
    &:hover {
      font-weight: 720;
      font-variation-settings: 'CASL' 1;
    }
  }
`

const MainNav = props => {
  const viewport = useWindowSize()
  return (
    <>
      <nav className='mainnavigation blurred'>
        <Link to='/' className='gav-expanded-container'>
          <VariLogo viewport={viewport.width} />
        </Link>
        <Wrapper className='pages'>
          <Link to='about' className='about menu-item'>
            About
          </Link>
          <Link to='portfolio' className='projects menu-item'>
            Projects
          </Link>
          <Link to='miscellaneous' className='misc menu-item'>
            Misc.
          </Link>
          <Link to='blog' className='blog menu-item'>
            Blog
          </Link>
          <Link to='contact' className='contact menu-item'>
            Contact
          </Link>
        </Wrapper>
      </nav>
    </>
  )
}

export default MainNav
