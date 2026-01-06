import { currentUser } from "@clerk/nextjs/server";
import React from "react";
import GuestSidebar from "./GuestSidebar";
import { getUserByClerkId } from "@/actions/user.action";
import { Card, CardContent, CardHeader } from "./ui/card";
import Link from "next/link";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Separator } from "@radix-ui/react-separator";
import { Link2, MapPin } from "lucide-react";

export default async function Sidebar() {
  const userAuth = await currentUser();
  if (!userAuth) return <GuestSidebar />;

  const user = await getUserByClerkId(userAuth.id);
  if (!user) return null;

  console.log({ user });

  return (
    <div className="sticky top-20">
      <Card>
        <CardContent>
          <div className="flex flex-col items-center text-center">
            <Link href={`/profile/${user.username}`} className="mt-8">
              <Avatar className="w-20 h-20 border-1">
                <AvatarImage src={user.image ?? "/avatar-placeholder.jpg"} />
              </Avatar>
            </Link>

            <div className="mt-5 space-y-2">
              <h2 className="font-semibold">{user.name}</h2>
              <p className="text-muted-foreground text-sm">{user.username}</p>
            </div>

            {user.bio && (
              <p className="mt-3 text-muted-foreground text-sm">{user.bio}</p>
            )}

            <div className="w-full px-2">
              <Separator className="my-4" />
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-2">
                  <p className="font-semibold">{user._count.followers}</p>
                  <p className="text-xs text-muted-foreground">Follower</p>
                </div>

                <Separator orientation="vertical" className="h-full" />

                <div>
                  <div className="flex flex-col gap-2">
                    <p className="font-semibold">{user._count.following}</p>
                    <p className="text-xs text-muted-foreground">Following</p>
                  </div>
                </div>
              </div>
              <Separator className="my-4"/>

            </div>
            <div className="w-full text-sm">
              <div className="flex items-center text-muted-foreground gap-2">
                <MapPin className="w-5 h-5 shrink-0" />
                {user.location || "No Location!"}
              </div>
              <div className="flex items-center text-muted-foreground gap-2 mt-2">
                <Link2 className="w-5 h-5 shrink-0"/>
                {user.website ? (<a href={`${user.website}`} className="hover:underline truncate" target="_blank">
                  {user.website}
                </a> ): (
                  "No Website!"
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
