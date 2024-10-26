import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

function Navbar() {
  return (
    <nav className='w-full flex justify-between py-[10px] px-4 sm:px-6 lg:px-16 border-b-[.5px] backdrop-blur-lg fixed top-0 z-50'>
      <div className='inline-flex items-center justify-center text-md text-primary'>
        <Link href='/'>
          Magic UI
        </Link>
      </div>
      <div className='flex gap-4'>
        <Button className='text-primary' variant={'ghost'}>
          <Link href='/sign-in'>Log in</Link>
        </Button>
        <Button variant={'secondary'}>
          <Link href='/sign-up'>Sign up</Link>
        </Button>
      </div>
    </nav>
  )
}

export default Navbar