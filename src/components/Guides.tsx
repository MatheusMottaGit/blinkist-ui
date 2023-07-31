import React from 'react'

import Image from 'next/image'
import psychology from '../assets/Psychology.svg'

const Guides = () => {
  return (
    <div className='w-full flex flex-col gap-4'>
      <div className='flex justify-between items-center text-lg text-white font-bold'>
        Guides you might like

        <a href="#" className='text-green-secondary-300 text-sm'>More</a>
      </div>

      <div className='flex flex-col gap-2 text-grey text-sm'>
        <span>Experts lead you through a topic</span>

        <div className='flex gap-2 overflow-x-hidden'>
          <Image
            src={psychology}
            alt=''
            className='rounded-lg'
          />

          <Image
            src={psychology}
            alt=''
            className='rounded-lg'
          />
        </div>
      </div>
    </div>
  )
}

export default Guides