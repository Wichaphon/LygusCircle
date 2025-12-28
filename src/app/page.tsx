import React from 'react'
import Image from 'next/image';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';

import { Moon } from 'lucide-react';
import ThemeMode from '@/components/ThemeMode';

export default function Home() {
  return (
    <div className='m-4'>
      Home
    </div>
  );
}

