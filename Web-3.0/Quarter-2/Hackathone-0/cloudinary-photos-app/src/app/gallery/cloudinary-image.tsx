"use client";

import { CldImage } from "next-cloudinary";


export function CloudinaryImage(props: any) {
    return (
        <CldImage
            src={...props}
            alt="Description of my image"
        />
    );
}