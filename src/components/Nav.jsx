import React from 'react'

// Import Link from React-Scroll
import { Link } from 'react-scroll'

// Import Use-Media-Query from React-Responsive
import { useMediaQuery } from 'react-responsive'

const links = [
  {
    path: 'home',
    name: 'Home'
  },
  {
    path: 'tours',
    name: 'Tours'
  },
  {
    path: 'discography',
    name: 'Discography'
  },
  {
    path: 'blog',
    name: 'Blog'
  },
  {
    path: 'contact',
    name: 'Contact'
  }
]

const Nav = ({ containerStyles, linkStyles }) => {

  const isDeskrop = useMediaQuery({
    query: '(min-width: 1310px)',
  })

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            className={`${linkStyles} cursor-pointer border-b-2 border-transparent`}
            key={index}
            smooth={!isDeskrop ? false : true}
            spy
            offset={-50}
            activeClass='active'
            to={link.path}
          >
            {link.name}
          </Link>
        )
      })}
    </nav>
  )
}

export default Nav