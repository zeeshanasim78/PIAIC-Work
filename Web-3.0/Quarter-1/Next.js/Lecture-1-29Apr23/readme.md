Sir Zia Repo link for this step is : https://github.com/panaverse/learn-nextjs/blob/main/step00_helloworld

Next.js is a flexible React framework that gives you building blocks to create fast web applications.
React is a JavaScript library for building interactive user interfaces. By user interfaces, we mean the elements that users see and interact with on-screen.  

Next.js is a React framework that gives you building blocks to create web applications. By framework, we mean Next.js handles the tooling and configuration needed for React, and provides additional structure, features, and optimizations for your application.

To automatically create a new Next.js project we can use command : npx create-next-app@latest 

The above command will create a new folder containing app as per your selected options

Note:
Please select the experimental app yes during the npx project parameters specification

src\app contains a files page.tsx which is the startup page
In the pafe.tsx file there is a function named "export default function Home() "
This is the function that will contain the content this is displayed on the startup page
You can delete all the code written in that function and write  
return <h1> <b> Hello World </b> ! From Pakistan</h1>  in that function

To run the project use command : npm run dev
It will run the server on a port and will show that URL like http://localhost:3000
Open that url in the browser and it will show the output

Next Step is to deploy that app on vercel
First Command is to install a CLI Vercel on your system
npm i -g vercel

Now After Installation of Vercel Cli type Vercel in the Terminal window
It will ask for some options , sign options to vercel , project name and path

The Cli Vercel will help in deploying the project on Vercel from the Terminal Window

After you application is deployed on the Vercel You can access it from any where in the world.


