import Image from 'next/image'
import React from 'react'

import logo from '../assets/Logo.svg'

const Logo = () => {
  return (
    <Image
      src={logo}
      alt=''
    />
  )
}

export default Logo