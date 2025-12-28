import { currentUser } from "@clerk/nextjs/server";
import React from "react";
import ThemeMode from "./ThemeMode";
import { Button } from "./ui/button";
import Link from "next/link";
import { House, Bell, UserIcon } from "lucide-react";
import { SignInButton, UserButton } from "@clerk/nextjs";

async function DesktopNavbar() {
  const user = await currentUser();
  return (
    <div className="hidden md:flex items-center gap-4">
        <ThemeMode />
        <Button variant="ghost" className="flex items-center gap-2" asChild>
            <Link href="/">
                <House className="w-4 h-4"/>
                <span className="hidden lg:flex items-center text-sm">Home</span>
            </Link>
        </Button>

        {user ? (
            <>
                <Button variant="ghost" className="flex items-center gap-2" asChild>
                    <Link href="/notifications">
                        <Bell className="w-4 h-4"/>
                        <span className="hidden lg:flex items-center text-sm">Notifications</span>
                    </Link>
                </Button>

                <Button variant="ghost" className="flex items-center gap-2" asChild>
                    <Link href={`/profile/${user.username ?? user.emailAddresses[0].emailAddress.split('@')[0]}`}>
                        <UserIcon className="w-4 h-4"/>
                        <span className="hidden lg:flex items-center text-sm">Profile</span>
                    </Link>
                </Button>

                <UserButton />
            </>
        ) : (
            <SignInButton mode="modal">
                <Button variant="default">Sign In</Button>
            </SignInButton>
        )}
    </div>

  );
}

export default DesktopNavbar;
