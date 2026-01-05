import { currentUser } from '@clerk/nextjs/server'
import React from 'react'
import GuestSidebar from './GuestSidebar';

export default async function Sidebar() {
    const user = await currentUser();

    if (!user) return <GuestSidebar />

  return (
    <div>
        
    </div>
  )
}
