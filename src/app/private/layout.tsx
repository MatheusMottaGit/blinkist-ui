'use client'
import { Home, LayoutDashboard, Library, Search } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { ReactNode } from 'react'

const PrivateLayout = ({ children }: { children: ReactNode }) => {

  const menus = [
    { icon: <Home size={15} />, title: 'For you', path: '/private/home' },
    { icon: <Search size={15} />, title: 'Explore', path: '/private/explore' },
    { icon: <Library size={15} />, title: 'My library', path: '/private/library' },
    { icon: <LayoutDashboard size={15} />, title: 'Spaces', path: '/private/spaces' },
  ]

  const currentPath = usePathname()

  return (
    <main className='w-full h-full flex flex-col justify-between'>
      <div className='p-6 overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-600'>
        {children}
      </div>

      <footer className='w-full bg-blue-tertiary p-4 flex items-center justify-around h-16 rounded-b-lg'>
        {
          menus.map((menu, i) => {
            return (
              <Link key={`${menu}-${i}`} href={menu.path} className='text-sm text-grey hover:text-green-secondary-300 transition-colors'>
                {
                  menu.path === currentPath

                    ? (
                      <span className='text-green-secondary-300 flex flex-col items-center justify-center gap-1'>
                        {menu.icon}

                        {menu.title}
                      </span>
                    )

                    : (
                      <span className='flex flex-col items-center justify-center gap-1'>
                        {menu.icon}

                        {menu.title}
                      </span>
                    )
                }
              </Link>
            )
          })
        }
      </footer>
    </main>
  )
}

export default PrivateLayout