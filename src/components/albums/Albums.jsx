'use client'
import React from 'react'

// Import Components 
import AlbumSlider from './AlbumSlider'
import SectionHeader from '../SectionHeader'

// Import Framer-Motion & Variants
import { motion } from 'framer-motion'
import { fadeIn } from '../../../variants'

const Albums = () => {
  return (
    <section id='discography'>
      <div className="container mx-auto">
        <SectionHeader
          pretitle='Discography'
          title='Popular Albums'
        />
        {/* Albums Slider */}
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}
        >
          <AlbumSlider />
        </motion.div>
      </div>
    </section>
  )
}

export default Albums