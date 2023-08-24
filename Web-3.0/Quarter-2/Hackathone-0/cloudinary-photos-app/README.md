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
