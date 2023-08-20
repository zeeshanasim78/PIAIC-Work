import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  //return NextResponse.redirect(new URL('/home', request.url))
    console.log("Middleware Function Called");
}
 
// See "Matching Paths" below to learn more

// If we set path it means the above mentioned mdille ware functions will only be
// called when that specific page is called
export const config = {
    // For single path
    // matcher: '/db/:path*',

    // Multiple paths we can use array as
 matcher: ['/about/:path*', '/dashboard/:path*'],

}