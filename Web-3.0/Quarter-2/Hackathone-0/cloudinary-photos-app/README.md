Hackathone-0 : Photo Album Next.js Tutorial (with Server Actions, Cloudinary, Shadcn)
https://www.youtube.com/watch?v=MC6D4vylKTc

Sites to Remeber :  
a) https://next.cloudinary.dev/ : For Cloudinary componets documentation
b) https://console.cloudinary.com/ : To access tje Cloudinary console and view details / settingss/ Assets
c) https://ui.shadcn.com/ : For Shadcn Documentation

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

Step 9 # Adding Side Menu in the Applicaiton
Craete a new component in the components\ui folder by creating a new tsx file.
Create a function SideMenu as :
export function SideMenu() {
  return (
  )
}
Copy a sample code of a Side Menu from the Shadcan Page Code
https://github.com/shadcn-ui/ui/blob/main/apps/www/app/examples/music/components/sidebar.tsx
and it inside the return function
Now to arrange the side menu and upload image functionality side by side place it inside a div and add flex in the layout.tsx file so that it is applied to all pages:

 <div className="flex">
      <SideMenu></SideMenu>
      <div>{children}</div>
  </div>

To reduce the width of the menue we can use w-1/5 in the starting div of the menu:<div className="pb-12 w-1/5">

Step # 10 : Changing the icons of the SideMenu Items
Visit https://heroicons.com/ to get the image urls in svg format and then paste them in the SideMenuBar component
To add the have the space between button and icon add  flex gap-2 in the button className

Step # 11 : Now lets design the galley page
Add a folder named gallery in the app folder
Now add page.tsx file in it.

Now create a defualt function named GalleryPage() and write following code in the page.tsx of Gallery folder as :
export default function GalleryPage() {}  . Also add the upload button code here in this page as the given code:
<section>
    <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Gallery</h1>
        <Button asChild>
            <div className="flex gap-ss2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                </svg>
                <CldUploadButton
                    onUpload={(result: UploadReslut) => {
                // setImageId(result.info.public_id);
                    }}
                    uploadPreset="wcr0tcgy"   />
            </div>
        </Button>
    </div> 
</section>

Step # 12 : Fetch all images in the library
The Cloudinary API search method allows you fine control on filtering and retrieving information on all the assets in your product environment with the help of query expressions in a Lucene-like query language. 
https://console.cloudinary.com/documentation/search_api
But the issue is that works as server component whereas we have used "use client" in the galley\page.tsx file.
To resolve that issue we will add a new file in the galley folder as upload-button.tsx copy paste all the code of page.tsx file and then paste in it. Change the function name to UploadButton , remove the inital section and div tags till the <Button> tag from that file
Now in the page.tsx file remove the "use client" and all import reference of client components such that only following code remains in the project:

import UploadButton from "./upload-button";
export default async function GalleryPage() {
    return (
       <section>
            <div className="flex justify-between">
                <h1 className="text-2xl font-bold">Gallery</h1>
             <UploadButton/>
                
            </div> 
        </section>
    )
}
Now save and run the project . It should work fine. 
Now to add the Search API code inside the page.tsx copy the code from above mention url and paste it inside the GalleryPage() before the return() code.Before that add the async in the function . Add t

const result = await cloudinary.v2.search
  .expression('resource_type:image')
  .sort_by('public_id','desc')
  .max_results(30)
  .execute()

You alse need to install cloudinary as : npm install cloudinary
adn then import the cloudinary as : import cloudinary from "cloudinary";
Now we also need to add some environment variables as mentioned at https://console.cloudinary.com/documentation/node_quickstart which is set CLOUDINARY_URL=cloudinary://API_KEY:API_SECRET@CLOUD_NAME in the .env file
We will specify the same cloud name that is already mentioned in the .env file
From the dashboard we will get the API Key and API Secret key and mention in the  .env file as

Step # 13  : to store the search result we will create a type SearchResults and use it as under:
    type SearchResult = {
        public_id: string;
}
Now get the Search results as :
    const result = await cloudinary.v2.search
        .expression('resource_type:image')
        .sort_by('public_id', 'desc')
        .max_results(30)
        .execute() as SearchResult[];


41


