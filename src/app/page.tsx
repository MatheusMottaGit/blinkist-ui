'use client'
import Button from '@/components/Button'
import Loading from '@/components/Loading'
import Logo from '@/components/Logo'
import { useAuth } from '@/hooks/useAuth'

export default function Home() {

  const { signIn, isLoading } = useAuth()

  return (
    <div className='h-full w-full flex flex-col justify-between'>
      <div className='bg-[url("../assets/Cards.svg")] bg-no-repeat bg-cover bg-center h-[600px] opacity-60 rounded-t-lg'></div>

      <div className='w-full flex flex-col gap-9 items-start p-6'>
        <Logo />

        <div className='flex flex-col gap-4'>
          <h1 className='text-white font-bold text-4xl w-full'>
            Understand powerful ideas in <strong className='text-blue-accent'>15 mins</strong>
          </h1>

          <span className='text-grey text-base'>
            Key insights from notification bestsellers and podcasts, curated just for you
          </span>
        </div>

        <div className='flex flex-col gap-2 w-full'>
          <Button onClick={signIn} className='bg-green-secondary-300 rounded-sm p-2 text-primary font-bold hover:bg-emerald-800 transition-colors inline-flex justify-center'>
            {
              isLoading ? (
                <Loading />
              ) : (
                <span>Login</span>
              )
            }
          </Button>
        </div>
      </div>
    </div>
  )
}
