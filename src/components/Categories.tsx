import { Headphones } from 'lucide-react'
import React from 'react'

const Categories = () => {
  return (
    <div className='flex flex-col gap-3'>
      <h2 className='text-white'>Categories</h2>

      <div className='grid grid-cols-3 grid-rows-3 gap-2 text-grey'>
        <div className='flex  items-center gap-2 bg-blue-tertiary p-2 rounded-sm'>
          <Headphones size={15} />
          Blinks
        </div>
        <div className='flex  items-center gap-2 bg-blue-tertiary p-2 rounded-sm col-span-2'>
          <Headphones size={15} />
          Management & Leadership
        </div>
        <div className='flex  items-center gap-2 bg-blue-tertiary p-2 rounded-sm col-span-2'>
          <Headphones size={15} />
          Career & Sucess
        </div>
        <div className='flex  items-center gap-2 bg-blue-tertiary p-2 rounded-sm'>
          <Headphones size={15} />
          Philosophy
        </div>
        <div className='flex  items-center gap-2 bg-blue-tertiary p-2 rounded-sm'>
          <Headphones size={15} />
          Productivity
        </div>
        <div className='flex  items-center gap-2 bg-blue-tertiary p-2 rounded-sm col-span-2'>
          <Headphones size={15} />
          Communication
        </div>
      </div>
    </div>
  )
}

export default Categories