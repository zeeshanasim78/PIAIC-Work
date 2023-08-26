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

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Photo App Galley",
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
    <html lang="en">
      <body className={inter.className}>
        <div className="flex items-center  bg-slate-200">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </NavigationMenuItem>

            <NavigationMenuItem> Photo Galley App </NavigationMenuItem>
          </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex">
          <SideMenu></SideMenu>

          <div className=" w-full px-4 pt-4">{children}</div>
        </div>
      </body>
    </html>
  );
}
