import Image from 'next/image'

"use client"

import { CldUploadButton } from 'next-cloudinary';



export default function Home() {
  return (
    <div>
      Welcome to the Cloudinary .. <br></br>
      <CldUploadButton uploadPreset="wcr0tcgy" />
    </div>
    
  
      )
}

