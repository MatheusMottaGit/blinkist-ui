import Button from '@/components/Button'
import { Folder, PlayCircleIcon, ShieldQuestion } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Spaces = () => {

  const spaces = [
    { icon: <Folder size={20} />, title: 'My space', excerpt: 'lorem ipsum dolor...' },
    { icon: <Folder size={20} />, title: 'My space', excerpt: 'lorem ipsum dolor...' },
    { icon: <Folder size={20} />, title: 'My space', excerpt: 'lorem ipsum dolor...' },
  ]

  return (
    <div className='flex flex-col gap-14'>
      <div className='flex justify-between items-center text-white'>
        <h1 className='w-fit border-b-4 border-b-green-secondary-300 font-bold text-4xl mt-2'>Spaces</h1>

        <ShieldQuestion />
      </div>

      <span className='text-grey text-xs -mt-9'>
        Bring friends, family & coworkers together to enjoy your recommendations- joining a space a and listening to what has been shared is free for anyone you invite!
      </span>

      <Link href={''} className='bg-blue-tertiary rounded-lg p-6 w-full h-24 text-grey text-sm flex items-center justify-center gap-4'>
        Discover how it works!

        <div className='bg-grey rounded-lg p-6 flex items-center justify-center w-24 h-12'>
          <PlayCircleIcon color='#d9d9d9' />
        </div>
      </Link>

      <div className='flex flex-col gap-3'>
        {
          spaces.map((space, i) => {
            return (
              <div key={`${space}-${i}`} className='flex items-center justify-start gap-3 hover:opacity-50 transition-all cursor-pointer'>
                <span className='text-green-secondary-300'>
                  {space.icon}
                </span>

                <div className='flex flex-col p-2 text-zinc-600'>
                  <h2 className='text-white'>{space.title}</h2>

                  {space.excerpt}
                </div>
              </div>
            )
          })
        }
      </div>

      <Button className='my-16 mx-28 p-2 rounded-full bg-green-secondary-300 hover:bg-green-secondary-700 transition-colors font-bold w-36'>
        New space
      </Button>
    </div>
  )
}

export default Spaces