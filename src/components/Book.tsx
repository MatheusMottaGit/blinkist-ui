import React from 'react'
import Image from 'next/image'

import { Bell, Headphones } from 'lucide-react'
import bookHuman from '../assets/HumanBook.svg'
import Button from './Button'

const Book = () => {
  return (
    <>
      <Image
        src={bookHuman}
        alt=''
        className='w-full rounded-lg'
      />

      <h2 className='text-base text-white'>Humanly possible</h2>

      <span className='text-grey text-sm'>
        <p>Sarah Bakewell</p>
        <p>Seven hundred Years of Humanist Freethinking, Inquiry, and Hope</p>
      </span>

      <div className='flex gap-2 items-center text-grey text-sm'>
        <Button className='bg-green-secondary-700 rounded-lg p-2 flex items-center justify-center gap-1'>
          <Headphones size={15} />
          Blinks
        </Button>

        20min
      </div>
    </>
  )
}

export default Book