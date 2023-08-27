"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SideMenu } from "@/components/ui/side-menu-bar";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Photo App Galley by Webdevsols",
  description: "Powered by Next.JS , Cloudinary and Shadcn UI",
};

export function AvatarDemo() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        {/* The Top Bar  */ }
        <div className="border-b ">
          <div className="flex h-16 items-center px-4 container mx-auto">
            Photo App Galley developed by Webdevsols
            {/* <TeamSwitcher />
            <MainNav className="mx-6" /> */}
            <div className="ml-auto flex items-center space-x-4"> 
                 <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
           {/*    <Search />
              <UserNav /> */}
            </div>
          </div>
        </div>

        <div className="flex">
          <SideMenu></SideMenu>

          <div className=" w-full px-4 pt-4">{children}</div>
        </div>
      </body>
    </html>
  );
}
