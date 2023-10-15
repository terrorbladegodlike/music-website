import React from 'react'

// Import Next Link
import Link from 'next/link'

// Import React-Icons
import { RiYoutubeFill, RiInstagramFill, RiSpotifyFill, RiSoundcloudFill } from 'react-icons/ri'

// Const Socials
const socials = [
  {
    path: '#',
    icon: <RiYoutubeFill />
  },
  {
    path: '#',
    icon: <RiInstagramFill />
  },
  {
    path: '#',
    icon: <RiSpotifyFill />
  },
  {
    path: '#',
    icon: <RiSoundcloudFill />
  }
]

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
          >
            <div className={`${iconStyles}`}>
              {item.icon}
            </div>
          </Link>
        )
      })}
    </div >
  )
}

export default Socials