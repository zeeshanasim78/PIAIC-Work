=====================================================================================================
Step # 1 : Create a folder and run VSCode from that folder
Step # 2 :  Now create a new app by giving code :  npx create-next-app@latest
Step # 3 : Run this project as npm run dev
Step # 4 : Now Install the Postman App on your system. Download the software from postman.com
Step # 5 : Open the postman software and from requests generate new request and pass the URL of your App. Postman will show the html page it get against the get request from the server

Now create a folder in your src\app and name it e.g sanjose
Create a new page.tsx file in it. Create the defult function in it as :
export default function Home(){
    return( <h1> Sanjose is the base of Silicon Valley</h1>);
}

Create an other folder inside the Sanjose folder and name it begal
Again create a file page.tsx in it and paste the code
export default function Home(){
    return( <h1> Sanjose Begal</h1>);
}

Dynamic Path
Create a folder with [] in the src\app
Create page.tsx page and write defualt funtion code as
export default function Home(){
    return( <h1> Sanjose Begal</h1>);
}

Now if you browse a path if that directory project exits then that page will be displayed
Now if that path does not exists then it will use the dynamic routing and will display the page that is defined in the [food]

Note : If we create a folder insode () then that folder will not be visible in the url path
For example if you create a folder (profile) at src/app

Now create an other folder inside the zeeshan at src\app\(profile) named zeeshan
Create a page.tsx in it. and now we can access it as https://localhost:3000/zeeshan

This page output will be shown although the zeeshan folder is at src\app\(profile)

API
There is a folder inside the src\app named api. If there is no then create one
Now create a folder named hello in it
In case of API we will create file route.ts not page.tsx

NOw in the Routes.ts file write code
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    return NextResponse.json({mesage:"Hello MAchine"});
    
}







======================================================================================================

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.