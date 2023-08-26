"use client";
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
  const [imageId, setImageId] = useState("cld-sample-2");
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <b>Welcome to the Cloudinary Photo Gallery</b>
      <CldUploadButton
        onUpload={(result: UploadReslut) => {
          setImageId(result.info.public_id);
        }}
        uploadPreset="wcr0tcgy"
      />
      {imageId && (
        <CldImage
          width="400"
          height="300"
          src={imageId}
          sizes="100vw"
          alt="Description of my image"
        />
      )}
    </main>
  );
}
