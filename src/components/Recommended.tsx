import Image from 'next/image'
import React from 'react'

import mustRead from '../assets/MustRead.svg'
import Button from './Button'

const Recommended = () => {

  return (
    <div className='w-full flex flex-col gap-4'>
      <div className='flex justify-between items-center text-lg text-white font-bold'>
        Recommended for you

        <a href="#" className='text-green-secondary-300 text-sm'>More</a>
      </div>

      <div className='flex flex-col gap-2 text-grey text-sm'>
        <span>We think you will like these</span>

        <div className='flex gap-3 overflow-hidden'>
          <div className='flex flex-col items-start gap-4'>
            <Image
              src={mustRead}
              alt=''
              className='rounded-lg'
            />

            <h2 className='text-white font-bold'>Life 3.0</h2>

            <span>Being human in the age of...</span>

            <div className='flex items-center gap-3 text-grey'>
              <Button className='bg-green-secondary-700 p-2 rounded-lg'>
                Blinks
              </Button>

              8 items
            </div>
          </div>

          <div className='flex flex-col items-start gap-4'>
            <Image
              src={mustRead}
              alt=''
              className='rounded-lg'
            />

            <h2 className='text-white font-bold'>Life 3.0</h2>

            <span>Being human in the age of...</span>

            <div className='flex items-center gap-3 text-grey'>
              <Button className='bg-green-secondary-700 p-2 rounded-lg'>
                Blinks
              </Button>

              8 items
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Recommended