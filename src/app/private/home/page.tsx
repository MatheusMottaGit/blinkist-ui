import Book from '@/components/Book'
import Following from '@/components/Following'
import ForYou from '@/components/ForYou'
import Guides from '@/components/Guides'
import { Bell } from 'lucide-react'
import React from 'react'

const Homepage = () => {
  return (
    <div className='flex flex-col gap-14'>
      <ForYou />

      <div className='flex flex-col gap-4 text-white'>
        <div className='flex items-center justify-between'>
          <h2>Free blink of the day</h2>

          <Bell />
        </div>

        <Book />
      </div>


      <Following />

      <Guides />

    </div>
  )
}

export default Homepage