'use client'
import React from 'react'

// Import Components
import SectionHeader from './SectionHeader'

// Import Framer-Motion & Variants
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

const Newsletter = () => {
  return (
    <section className='bg-newsletter bg-fixed h-[480px] section bg-cover w-full bg-no-repeat bg-center' id='contact'>
      <div className="container mx-auto h-full">
        <div className='flex flex-col h-full items-center justify-center'>
          {/* Text */}
          <SectionHeader
            pretitle='Get in touch'
            title='Sign up to our newsletter'
          />
          {/* Input */}
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='relative flex items-center w-full max-w-xl'
          >
            <input
              type="text"
              placeholder='Email address'
              className='w-full h-[64px] outline-none rounded-full bg-primary/60 backdrop-blur-[15px] px-8'
            />
            <button type="submit" className='bg-accent absolute right-2 h-[46px] rounded-full text-[15px] hover:bg-accent-hover transition-all px-6'>
              Subscribe
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Newsletter