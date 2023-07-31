import Categories from '@/components/Categories'
import Input from '@/components/Input'
import Recommended from '@/components/Recommended'
import React from 'react'

const Explore = () => {
  return (
    <div className='flex flex-col gap-14'>
      <h1 className='w-fit border-b-4 border-b-green-secondary-300 text-white font-bold text-4xl mt-2'>Explore</h1>

      <Input />

      <Categories />

      <Recommended />
    </div>
  )
}

export default Explore