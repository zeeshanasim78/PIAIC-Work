"use client"


import { CldUploadButton } from 'next-cloudinary';
import { CldImage } from 'next-cloudinary';



export default function Home() {
  return (
    <div>
      Welcome to the Cloudinary .. <br></br><br/>
      <CldUploadButton uploadPreset="wcr0tcgy" className='bg-cyan-500'> Upload Picture to Cloudinary </CldUploadButton>

      <CldImage
        width="960"
        height="600"
        src="<Public ID>"
        sizes="100vw"
        alt="Description of my image"
      />
      
    </div>
    
  
      )
}

