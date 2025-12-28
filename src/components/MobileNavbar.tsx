"use client";

import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import React from "react";
import { useState } from "react";
import ThemeMode from "./ThemeMode";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Bell, House, LogOutIcon, SquareMenu, UserIcon } from "lucide-react";
import Link from "next/link";

export default function MobileNavbar() {
  const [showMenu, setShowMenu] = useState(false);
  const { user, isSignedIn } = useUser();

  return (
    <div className="flex items-center gap-4 md:hidden">
        <ThemeMode />

        <Sheet open={showMenu} onOpenChange={setShowMenu}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                    <SquareMenu className="h-4 w-4"/>
                </Button>
            </SheetTrigger>

            <SheetContent side="right">
                <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                </SheetHeader>

                <nav className="flex flex-col mt-6 space-y-4">
                    <Button variant="ghost" className="flex justify-start items-center gap-2" onClick={()=>setShowMenu(false)} asChild>
                        <Link href="/">
                            <House className="w-4 h-4"/>
                            <span>Home</span>
                        </Link>
                    </Button>

                    {isSignedIn ? (
                        <>
                            <Button variant="ghost" className="flex justify-start items-center gap-2" onClick={()=>setShowMenu(false)} asChild>
                                <Link href="/notifications">
                                    <Bell className="w-4 h-4"/>
                                    <span>Notifications</span>
                                </Link>
                            </Button>

                            <Button variant="ghost" className="flex justify-start items-center gap-2" onClick={() => setShowMenu(false)} asChild>
                                <Link href={`/profile/${user.username ?? user.emailAddresses[0].emailAddress.split('@')[0]}`}>
                                    <UserIcon className="w-4 h-4"/>
                                    <span>Profile</span>
                                </Link>
                            </Button>

                            <SignOutButton>
                                <Button variant="destructive" className="flex justify-center items-center gap-2" onClick={() => setShowMenu(false)}>
                                    <LogOutIcon className="w-4 h-4"/>
                                    <span>Logout</span>
                                </Button>
                            </SignOutButton>
                        </>
                    ) : (
                        <>
                            <SignInButton mode="modal">
                                <Button variant="default" className="w-full" onClick={() => setShowMenu(false)}>
                                    Sign in
                                </Button>
                            </SignInButton>
                        </>
                    )}
                </nav>
            </SheetContent>
        </Sheet>
    </div>
  )
}
