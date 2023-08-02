Next.js 13 Hello World
Prerequisite :

1. Download and Install Node.js LTS Version
2. Download and Install VS Code

Steps to create 1st Project : Hello World

1. Create a new Folder
2. Open the Command Line (Terminal) and run this command: npx create-next-app
   This will create a Next.Js project. But you have to specify diffenet values during creation of a project

Note :
a) The app directory is where you define routes, create UI and colocate files such as components, tests, or stylesheets.
b) Our file extension is not jsx but tsx because we are using TypeScript
c) app/page.tsx file will be execute when project is started

In the app/page.tsx file delete the previous React component and replace it with the following simple hello world component:
export default function Home() {
return (

<div>Hello World</div>
);
}

We wrote a very simple hello world React component in the file. Read the following React Documentation from https://nextjs.org/docs/getting-started/react-essentials

To run this project use command: npm run dev

Open http://localhost:3000 with your browser to see the results locally. The page auto-updates as you edit the file.

Note :
a) The development server created a layout.tsx file by itself even if you delete it. This means the Next.js requires that there must be RootLayout component in the app folder for the app to function.
b) The app/layout.tsx and app/page.tsx files will be rendered when the user visits the root of your application.

The file app/layout.tsx is used to define UI that is shared across multiple pages. A layout accepts another layout or a page as its child. You can nest layouts to create nested routes.

Manual Deployment of Project on Vercel through CLI
The easiest way to deploy your Next.js app is to use the Vercel Platform from the creators of Next.js.
npm i -g vercel

Now go to the Next.js project directory and give the following command to deploy to cloud: vercel
The app will be deployed at url like https://step00-helloworld.vercel.app
