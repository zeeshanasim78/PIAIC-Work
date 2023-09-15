"use client"

import { Heart } from "@/components/icons/hearts"
import { CldImage } from "next-cloudinary"
import cloudinary from "cloudinary"
import { useTransition } from "react"
import { setAsFavouriteAction } from "./actions"
export function CloudinaryImage(props: any & { publicId: string }) {
    const [transition, startTransition] = useTransition();


    return (
       <div className="relative">
            <CldImage {...props} />
            <Heart
                onClick={() => {
                    startTransition(() => { 
                    setAsFavouriteAction(props.publicId);
                })
            }}
                className="absolute top-2 right-2 hover:text-red-600 cursor-pointer" />
       </div>
    )
}