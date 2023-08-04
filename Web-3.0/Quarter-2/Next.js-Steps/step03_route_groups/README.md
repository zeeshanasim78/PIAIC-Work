Next.js 13 Route Groups

https://nextjs.org/docs/app/building-your-application/routing/defining-routes#route-groups

Creating Routes :
Next.js uses a file-system based router where folders are used to define routes. Each folder represents a route segment that maps to a URL segment. To create a nested route, you can nest folders inside each other. For example in the URL http://acme.com/dashboad/setting

Here / is the Root Seqment
dashboard is the Segment
setting is the Leaf Segment
/dashboard/setting is the URL Path

A special page.tsx file is used to make route segments publicly accessible. If there is no page.tsx file in a folder then that URL path is not publicly accessible. Such folder could be used to store components, stylesheets, images, or other colocated files.

The hierarchy of the app folder maps directly to URL paths. However, it’s possible to break out of this pattern by creating a route group. A route group can be created by wrapping a folder’s name in parenthesis: (folderName)

We should use the component for navigation unless you have a specific requirement for using useRouter.

Start the Server:

    npm run dev

Open the Browser:

    http://localhost:3000/

This is a Next.js project bootstrapped with create-next-app.

Getting Started
First, run the development server:

npm run dev

# or

yarn dev
Open http://localhost:3000 with your browser to see the result.

You can start editing the page by modifying app/page.tsx. The page auto-updates as you edit the file.

API routes can be accessed on http://localhost:3000/api/hello. This endpoint can be edited in pages/api/hello.ts.

The pages/api directory is mapped to /api/\*. Files in this directory are treated as API routes instead of React pages.

Learn More
To learn more about Next.js, take a look at the following resources:

Next.js Documentation - learn about Next.js features and API.
Learn Next.js - an interactive Next.js tutorial.
You can check out the Next.js GitHub repository - your feedback and contributions are welcome!

Deploy on Vercel
The easiest way to deploy your Next.js app is to use the Vercel Platform from the creators of Next.js.

Check out our Next.js deployment documentation for more details.
