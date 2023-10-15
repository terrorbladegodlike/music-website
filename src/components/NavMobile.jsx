import React, { useContext } from 'react'

// import NavContext
import { NavContext } from '@/context/NavContext'

// Import React-Icons
import { RiCloseLine } from 'react-icons/ri'

// Import Components
import Nav from './Nav'

const NavMobile = () => {

  const { isOpen, setIsOpen } = useContext(NavContext)

  return (
    <nav className={`${isOpen ? 'right-0' : 'right-full'} xl:hidden fixed w-full bg-primary top-0 z-20 bottom-0 transition-all duration-500`}>
      {/* Close Icon */}
      <div
        onClick={() => setIsOpen(false)}
        className='absolute right-4 top-5 cursor-pointer'
      >
        <RiCloseLine className='text-5xl' />
      </div>
      {/* Nav Components */}
      <Nav containerStyles='flex flex-col text-[30px] uppercase font-bold h-full items-center justify-center gap-y-8' />
    </nav>
  )
}

export default NavMobile