'use client'

// Import Use Effect & use State
import { useEffect, useState } from "react"

// Import Next Image & Link
import Image from "next/image"
import Link from "next/link"

// Import Framer Motion & Variants
import { motion } from "framer-motion"
import { fadeIn } from "../../variants"

// Import Components
import NavMobile from "./NavMobile"
import Nav from "./Nav"
import MenuBtn from "./MenuBtn"
import Socials from "./Socials"

const Header = () => {

  const [active, setActive] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Detect Scroll
      setActive(window.scrollY > 100)
    }

    // Add Event Listener
    window.addEventListener('scroll', handleScroll)

    // Clear Event Listener
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`fixed z-50 w-full transition-all ${active ? 'bg-[#030315] py-6' : 'bg-transparent py-8'}`}>
      <div className="container mx-auto flex flex-col xl:flex-row items-center justify-between">
        {/* Logo */}
        <Link
          href={'#'}
          className='relative flex w-[226px] h-[37.64px] transition-all mb-4 xl:mb-0'
        >
          <Image
            src={'/assets/header/logo.svg'}
            fill
            className="object-contain"
          />
        </Link>
        {/* Nav */}
        <Nav containerStyles='hidden xl:flex items-center gap-x-8' />
        {/* Nav Mobile */}
        <NavMobile />
        {/* Menu Btn */}
        <div className="absolute right-7 top-9 z-10 xl:hidden">
          <MenuBtn />
        </div>
        {/* Socials */}
        <Socials
          iconStyles='hover:text-accent transition-all'
          containerStyles='flex text-[24px] gap-x-4'
        />
      </div>
    </header>
  )
}

export default Header