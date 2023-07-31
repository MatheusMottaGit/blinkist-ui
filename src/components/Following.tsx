import { Brain, Network } from 'lucide-react'
import React from 'react'

const Following = () => {
  return (
    <div className='w-full flex flex-col gap-2 text-white'>
      <h1 className='text-3xl font-bold'>Following</h1>

      <div className='flex gap-2'>
        <div className='p-2 rounded-sm bg-blue-tertiary w-32 h-10 flex items-center justify-start gap-1 text-sm text-grey'>
          <Brain size={15} />

          <span>Psychology</span>
        </div>

        <div className='p-2 rounded-sm bg-blue-tertiary w-full h-10 flex items-center justify-start gap-1 text-sm text-grey'>
          <Network size={15} />

          <span>Management & leadership</span>
        </div>
      </div>
    </div>
  )
}

export default Following