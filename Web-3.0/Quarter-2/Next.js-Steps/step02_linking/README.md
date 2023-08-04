Next.js 13 Linking and Navigating

Read the Linking and Navigating fundamentals docs from https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating

We will use the Link component to navigate between home page and name page. For more information visit the URL https://nextjs.org/docs/app/api-reference/components/link

<Link> Component is a built-in component that extends the HTML <a> tag to provide prefetching and client-side navigation between routes. It is the primary way to navigate between routes in Next.js.
We can use it by importing it from next/link, and passing a href prop to the component:

Now write following TypeScript code in the app/page.tsx file

import Link from 'next/link'
export default function Page() {
return <Link href="/names">Names Page</Link>
}

We will use useRouter() Hook to programmatically change routes inside Name Client Component.
https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#userouter-hook
For Example:
return (
<div>
<button type="button" onClick={() => router.push('/')}>
Lets Move to Home Page using Programatically useRouter
</button>
</div>
)

We should use the component for navigation unless you have a specific requirement for using useRouter.

Start the Server: npm run dev

Open the Browser: http://localhost:3000/
