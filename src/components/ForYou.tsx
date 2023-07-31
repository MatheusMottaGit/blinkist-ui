'use client'
import React from 'react'
import { useAuth } from '@/hooks/useAuth'
import { Bell, Settings } from 'lucide-react'

const ForYou = () => {

  const { user } = useAuth()

  return (
    <div className='w-full flex flex-col gap-3'>
      <div className='w-full flex items-center justify-end gap-3 text-grey'>
        <Bell size={20} />

        <Settings size={20} />
      </div>

      <h1 className='w-fit border-b-4 border-b-green-secondary-300 text-white font-bold text-4xl'>For you, {user.name}</h1>
    </div>
  )
}

export default ForYou