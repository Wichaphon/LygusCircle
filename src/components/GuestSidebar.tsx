import React from 'react'
import { Card, CardContent, CardHeader } from './ui/card'
import { Button } from './ui/button'
import { SignInButton, SignUpButton } from '@clerk/nextjs'

export default function GuestSidebar() {
  return (
    <div className='sticky top-20'>
        <Card>
            <CardHeader className='text-center text-xl font-semibold'>Welcome to LyGusCircle!!</CardHeader>
            <CardContent>
                <p className='text-sm text-center'>Sign in or Sign up to build your profile and join the conversation.</p>
                <SignInButton mode='modal'>
                    <Button className='w-full mt-6' variant="outline">
                        Login   
                    </Button>
                </SignInButton>

                <SignUpButton mode='modal'>
                    <Button className='w-full mt-3' variant="default">
                        Sign Up
                    </Button>
                </SignUpButton>
            </CardContent>
        </Card>
    </div>
  )
}
