import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare)

export default function SocialLinks() {
  return (
    <>
      <a className='menu-item' href='https://dribbble.com/greyghost'>
        <FontAwesomeIcon icon={['fab', 'dribbble']} />
      </a>
      <a className='menu-item' href='https://twitter.com/_gvaught'>
        <FontAwesomeIcon icon={['fab', 'twitter']} />
      </a>
      <a className='menu-item' href='https://gitlab.com/gvaught'>
        <FontAwesomeIcon icon={['fab', 'gitlab']} />
      </a>
      <a className='menu-item' href='https://linkedin.com/in/gavinvaught'>
        <FontAwesomeIcon icon={['fab', 'linkedin']} />
      </a>
    </>
  )
}
