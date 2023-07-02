import React from "react";
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Hero_img from "/public/Hero_img.webp"
import Featured1 from "/public/Featured1.webp"
import Featured2 from "/public/Featured2.webp"
import Featured3 from "/public/Featured3.webp"
import Featured4 from "/public/Featured4.webp"
import Image from "next/image"

 const Hero=() => {
    return (
        <div  className="flex flex-col lg:flex-row gap-y-10 py-6 border-0">
            {/* For LHS Part of Section */}
            <div className="flex-1  border-0">
                 <Badge className="mx-8 my-5 py-2 px-5 rounded-lg bg-blue-200 text-blue-700 hover:bg-blue-300">Sale 70%</Badge>

                 <div className="flex-1 flex-col  items-center  gap-8 py-4  border-0">
                    <h1  className="  text-4xl font-extrabold tracking-tight lg:text-5xl px-5 ">
                         An Industrial take on Streetwear 
                    </h1>
                    <p className="gap-8 px-4 py-4 ">
                        Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits..
                    </p>
                    <Button className="mt-3 mx-10 bg-black py-3">
                       Start Shopping
                    </Button>

                 </div>
              
    
                <div className="flex flex-col items-center lg:flex-row gap-8 py-8">
                    <Image src={Featured1}  alt="Featured Image 1" className="mx-4" ></Image>
                    <Image src={Featured2}  alt="Featured Image 2" className="mx-4"></Image>
                    <Image src={Featured3}  alt="Featured Image 3" className="mx-4"></Image>
                    <Image src={Featured4}  alt="Featured Image 4" className="mx-"></Image>
                </div>
                
            </div>

            {/* For RHS Part of Section */}
            <div className="flex-1 border-0"> 
                <div className=" flex h-[500px] items-center justify-center from-slate-100 to-slate-100 before:absolute before:h-[470px] before:w-[450px] before:rounded-full before:bg-gradient-to-b">
                    <Image src={Hero_img} height={550} width={550} alt="Hero Image" className="z-10 "></Image>
                </div>
            </div>

        </div>
    )
    
 }

 export default Hero