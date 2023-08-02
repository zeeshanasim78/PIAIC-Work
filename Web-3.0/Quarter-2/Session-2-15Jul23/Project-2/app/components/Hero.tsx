import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import React from "react";
import image from "@/public/assets/image.png";

export default function Hero() {
  return (
    <div className=" mt-2 justify-around w-4/5 mx-auto flex gap-14  h-screen ">
      {/* HERO TEXT  */}
      <div className=" w-1/3 flex flex-col gap-9 ">
        <div className=" w-[100px] text-center px-2 py-3 rounded-md text-blue-900 font-bold drop-shadow-md bg-blue-200">
          Sale 70%
        </div>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          An Industrial Take on Streetwear
        </h1>
        <p className="leading-7 w-3/4 [&:not(:first-child)]:mt-6">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>

        <Button className="w-[200px] p-3">
          <ShoppingCart className="mr-2 h-4 w-4" /> Shopping Cart
        </Button>
      </div>
      {/* HERO IMAGE  */}
      <div className=" flex items-center justify-center   rounded-full relative">
        <div className=" bg-orange-300 w-[500px] h-[500px] opacity-70 z-[-1] absolute  rounded-full"></div>
        <Image src={image} alt="Home" className="  z-1 w-full h-full" />
      </div>
    </div>
  );
}
