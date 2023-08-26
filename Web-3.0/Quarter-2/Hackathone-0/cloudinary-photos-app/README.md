Hackathone-0 : Photo Album Next.js Tutorial (with Server Actions, Cloudinary, Shadcn)
https://www.youtube.com/watch?v=MC6D4vylKTc

Note : We can configure this project to a git remote repo as:
i) git status : To check the git status
ii) git remote -V : To check git remote location
iii) To set git remote location we can use command :
git remote add origin git@github.com:zeeshansim78/cloudaniry-photo-app
iv) To commit and upload all on remote location we will use command :
git add -all
v) To commit get-commit

# What is Next Cloudinary

High-performance image and video delivery and uploading at scale in Next.js powered by Cloudinary.

- Automatically optimize images and videos and deliver in modern formats
- Remove backgrounds from images
- Dynamically add image and text overlays to images and videos
- AI-based cropping and resizing
- Tansform images and videos using color and effects
- Generate Open Graph Social Media cards on the fly
- Drop-in Upload Widget
  ...all at scale with Cloudinary

Step # 1 : To install cloudinary use command : npm install next-cloudinary

Step # 2 : Add a .env file in the project. Add following code in that file
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="<Your Cloud Name>"
In the <Your Cloud Name> type the cloud name from the cloundinary .
For this open the site https://console.cloudinary.com/ . You can sign in using user id , using gmail or using github. After Sign go to the account and get the cloud name mentioned there. Copy that cloud name and paste it in the .env file for the NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME paramter.

Step # 3 : Before we move on we have to configure upload Preset. This can be done from the settings --> Upload section. Now Click on Upload presets --> Add Upload Preset.
Now there are four types of settings :
a) Storage and Access : Set signing mode to unsigned Rest should remain defualt options
b) Media Analysis and AI : Means what to do when media is upload. Set the check box for Google Auto Tagging
c) Upload Manipulations : default settings
d) Upload Control: default settings
Press save button to save this upload preset. Note that present name and write it in the .env file

Means how cloudinary will treat the uploaded images. Either everyone is allowed to upload or only signed ones

Step # 4 : Getting Started with Cld Upload Button
The CldUploadButton creates a button element that uses an instance of the Cloudinary Upload Widget to give you an easy way to add upload capabilities to your Next.js app. The CldUploadButton component wraps the CldUploadWidget component providing a pre-defined UI (a button). The same concepts apply, including having the option of using Signed or Unsigned uploads.
Add following code in the page.tsx file
import { CldUploadButton } from 'next-cloudinary';
<CldUploadButton uploadPreset="<Upload Preset>" />
Note: If using the Next.js 13 app directory, you must add the "use client" directive at the top of your file on the main page.tsx file. Set the uploadPreset value to the Preset which you set in the Step # 3. In this case it is.
Now run the project using command : npm run dev

Step # 5 : Getting Started with CldImage
The CldImage component provides an easy way to deliver images from Cloudinary with the same experience you'd expect inside of a Next.js app. With it comes access to more advanced features like dynamic cropping, background removal, overlays, and other Cloudinary transformations.
As CldImage is a wrapper around the Next.js Image component, you also gain access to all built-in Image component features will work out-of-the-box like Responsive Sizing.

To add the CldImage Control we can use following code :
import { CldImage } from 'next-cloudinary';
in the function write the code as :
<CldImage
        width="960"
        height="600"
        src="<public id>"
        sizes="100vw"
        alt="cld-sample-4 Description of my image"
      />

Note: The public id is given to a picture after it is uploaded. So click on the image in the cloudinary from console.cloudinary.com .Copy the public id assigned and pased in the src of <CldImage> as:
<CldImage
        width="960"
        height="600"
        src="cld-sample-4"
        sizes="100vw"
        alt="cld-sample-4 Description of my image"
      />

Step # 6 : Now we want to display the image as it is uploaded . For this we need to get its public id and passit to to the CldImage control for that we will use the useState. We will also need to define a type so that the values of the Image uploaded are properly stored wo we will change the method as :

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

Step # 7 : We can add different transformation features on the image that is provided by the Cloudinary. For Example
we can blur faces , removes background , tint the image colors etc
<CldImage
  width="1200"
  height="1200"
  src="<Public ID>"
  crop="thumb"
  removeBackground
  blurFaces="true"
  tint="70:blue:green:purple"
  underlay="<Public ID>"
  sizes="100vw"
  alt="Description of my image"
/>

Step 8 : Now install the Shadcn Library here so that we can use a component library that in the project. To install Shadcn in this project we will write command : npx shadcn-ui@latest init

We will use following components at start Navigation Menue and Avatar. We need to first intsall these components as:

> > npx shadcn-ui@latest add navigation-menu
> > npx shadcn-ui@latest add avatar
> > npx shadcn-ui@latest add button

> > Now Add the NAvigation Menu and the Avatar in the layout.tsx in the src/app folder so that these menu and avatar are displayed on all the pages.

Step 9 # Adding Side Bar in the Applicaiton
