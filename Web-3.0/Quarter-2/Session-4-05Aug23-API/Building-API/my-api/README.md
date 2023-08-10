Building our own API

Step # 1 : Create a new next.js app

Step # 2 : Create a new folder api in the app folder. This name is fixed . The name of the folder must be api

Step # 3 : Now create a folder books where your API functions will be created

Step # 4 : Now create route.ts file in the book folder

Step # 5 : write following code in it:

import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest)
{
const url = request.nextUrl;
if (url.searchParams.has("name")) {
const name = url.searchParams.get("name");
return new NextResponse('Hello , from ' + name);
}
else {
return new NextResponse("Please send your name in search");
}
}

We are using Rest API . now run the project using npm run dev

When the project is ececuting you can check either your API is working or not.
To check the working of our API we can use Postman or we can also check get using the Google Chrome Browser

Now in the Postman select the Get type and pass URL http://localhost:3000/api/books?name=WonderLand
