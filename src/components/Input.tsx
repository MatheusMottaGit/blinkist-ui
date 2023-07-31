import { Search } from 'lucide-react'
import React from 'react'

const Input = () => {
  return (
    <div className='-mt-4 bg-blue-tertiary rounded-sm p-4 w-full h-16 flex items-center justify-start gap-3 text-grey'>
      <Search size={15} />

      <input
        type='text'
        placeholder='Title, author or topic...'
        className='bg-transparent outline-none'
      />
    </div>
  )
}

export default Input