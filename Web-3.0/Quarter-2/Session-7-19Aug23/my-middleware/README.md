Middleware

https://nextjs.org/docs/app/building-your-application/routing/middleware

Middleware allows you to run code before a request is completed. Then, based on the incoming request, you can modify the response by
rewriting, redirecting, modifying the request or response headers, or responding directly. Middleware runs before cached content and
routes are matched.

Matching Paths : Middleware will be invoked for every route in your project. The following is the execution order:
headers from next.config.js
redirects from next.config.js
Middleware (rewrites, redirects, etc.)
beforeFiles (rewrites) from next.config.js
Filesystem routes (public/, \_next/static/, pages/, app/, etc.)
afterFiles (rewrites) from next.config.js
Dynamic Routes (/blog/[slug])
fallback (rewrites) from next.config.js

Convention
Use the file middleware.ts (or .js) in the root of your project to define Middleware. For example, at the same level as pages or app, or inside src if applicable. So we will create the middleware.ts file in the src directory(Not in the app directory)

Now if you run the project and check the url http://localhost:3000/home
It will display error This page isn’t working. It is due to the fact that in the function middle ware we have written :  
return NextResponse.redirect(new URL('/home', request.url))

It means we have redirected the request to a path home. Thats why we are not getting response. Now remarks this line and write console.log("Middleware Function Called")

Matcher
matcher allows you to filter Middleware to run on specific paths.

Read the documentation https://nextjs.org/docs/app/building-your-application/routing/middleware for various other features
