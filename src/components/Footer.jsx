'use client'
import React from 'react'

// Import Next-Link & Next-Image
import Link from 'next/link'
import Image from 'next/image'

// Import Components
import Socials from './Socials'
import Nav from './Nav'

// Import Framer-Motion & Variants
import { fadeIn } from '../../variants'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className='bg-accent section h-[500px] xl:h-auto'>
      <div className="container mx-auto h-full flex flex-col items-center gap-y-8">
        {/* Email Link */}
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Link href='#'>
            <h2 className='text-[24px] lg:text-[38px] font-semibold leading-tight'>
              ternovetchii.2002@mail.ru
            </h2>
          </Link>
        </motion.div>
        {/* Nav */}
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Nav
            containerStyles='flex flex-col xl:flex-row justify-center items-center gap-y-4 xl:gap-x-8 text-sm uppercase font-semibold'
            linkStyles='hover:text-primary/80 transition-all'
          />
        </motion.div>
        {/* Socials */}
        <motion.div
          variants={fadeIn('up', 0.6)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Socials
            containerStyles='flex text-[24px] gap-x-8'
            iconStyles='hover:text-primary/80 transition-all'
          />
        </motion.div>
        {/* Logo */}
        <motion.div
          variants={fadeIn('up', 0.8)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.1 }}
        >
          <Link
            className='relative w-[250px] h-[50px] flex transition-all'
            href='#'
          >
            <Image
              src={'/assets/header/logo.svg'}
              fill
              className='object-contain'
              alt=''
            />
          </Link>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer