import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

function Navbar() {
  return (
    <nav className='w-full flex justify-between py-3 px-4 sm:px-6 lg:px-8 border-b-[.25px] backdrop-blur-lg fixed top-0 z-50'>
      <div className='inline-flex items-center justify-center text-lg text-primary'>
        <Link href='/'>
          Magic UI
        </Link>
      </div>
      <div className='flex gap-4'>
        <Button className='text-primary' variant={'ghost'}>
          <Link href='/login'>Log in</Link>
        </Button>
        <Button variant={'secondary'}>
          <Link href='/signup'>Sign up</Link>
        </Button>
      </div>
    </nav>
  )
}

export default Navbar