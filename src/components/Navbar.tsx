import React from 'react'
import Link from 'next/link'

async function Navbar() {
    
  return (
    <nav className='sticky top-0 w-full border-b bg-background/95 backdrop-blur z-50'>
        <div className='max-w-7xl mx-auto px-4'>
            <div className='flex justify-between items-center h-16'>
                <div className='flex items-center gap-2'>
                    <Link href="/" className='text-xl font-bold tracking-wider text-primary'>
                        LyGusCircle
                    </Link>
                </div>


            </div>
        </div>
    </nav>
  )
}

export default Navbar