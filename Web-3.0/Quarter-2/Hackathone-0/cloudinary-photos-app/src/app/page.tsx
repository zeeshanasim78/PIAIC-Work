"use client";

import clsx from "clsx";
import { CldUploadButton } from "next-cloudinary";
import { CldImage } from "next-cloudinary";
import { useState } from "react";

export type UploadReslut = {
  event: "success";
  info: {
    public_id: string;
  };
};

export default function Home() {
 /*   const [imageId, setImageId] = useState("cld-sample-2"); */clsx
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <b>Welcome to the Cloudinary Photo Gallery</b>
      {/* <CldImage
        width="960"
        height="600"
        src="oayts543fcxwwtuh0vof"
        sizes="100vw"
        alt="Image from my Clouidary Media Library"
      /> */}
      <CldUploadButton uploadPreset="h1yrzhas" />
    </main>
  );
}
