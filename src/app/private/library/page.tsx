import { Bell, Bookmark, ChevronRight, Download, Pencil, ShoppingBag } from 'lucide-react'
import React from 'react'

const Library = () => {

  const options = [
    { icon: <Bookmark />, title: 'Saved', length: '0 items' },
    { icon: <Download />, title: 'Downloads', length: '0 items' },
    { icon: <ShoppingBag />, title: 'Shop', length: '0 items' },
  ]

  return (
    <div className='flex flex-col gap-14'>
      <div className='w-full flex flex-col gap-3'>
        <div className='w-full flex items-center justify-end gap-3 text-grey'>
          <Bell size={20} />

          <Pencil size={20} />
        </div>

        <h1 className='w-fit border-b-4 border-b-green-secondary-300 text-white font-bold text-4xl'>My library</h1>
      </div>

      <div className='w-full flex flex-col gap-5'>
        {
          options.map((option, i) => {
            return (
              <div key={`${option}-${i}`} className='grid grid-cols-3 text-white hover:opacity-50 transition-all cursor-pointer'>
                <div className='h-12 w-12 bg-blue-tertiary rounded-lg flex items-center justify-center'>
                  {option.icon}
                </div>

                <div className='flex flex-col gap-2 -ml-12'>
                  {option.title}

                  <span className='text-xs text-grey'>{option.length}</span>
                </div>

                <div className='self-center justify-self-end'>
                  <ChevronRight />
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Library