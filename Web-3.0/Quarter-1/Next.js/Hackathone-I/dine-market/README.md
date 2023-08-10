Lecture URL :
https://www.youtube.com/watch?v=loG4NOwbeU0

Sir Zia Repo Link for Builind Project using Shadcn
https://github.com/panaverse/learn-nextjs/tree/main/step07_styling/shadcnUI/step00_shadcn_ui/step00_helloworld

Task : Our task is to make a UI replica of this site https://full-stack-ecommerce-clothing-web.vercel.app/


Steps
================================================================================================================
Step # 1 : Create a Next.js project using command :    npx create-next-app@latest
you can also create a Next.js Project if you want to use the Shadcn with it as :
npx create-next-app@latest my-app --typescript --tailwind --eslint

Step # 2 : Initialize the Shadcn using the command : npx shadcn-ui init  
or if you want to initialize it using the latest Shadcn you can use command : npx shadcn-ui@latest init
Note : Shadcn are Re-usable components built using Radix UI and Tailwind CSS. Shadcn is NOT a component library. It's a collection of re-usable components that you can copy and paste into your apps.
Note: If you are applying Shadcn library on your existing project that on intialization of Shadcn components the setting is global.css and tailwind.config.js will be over wrritten. So before intializing shadcn take backup of the contents of above mentioned files and then manuualy add those styles after intialization of shadcn components in the global.css and tailwind.config.js

Step # 3 : Now check if all the settings are correct and pages are running properly using command : npm run dev
Note : In case if the Tailwind css is not applied correctly then check the following configurationin tailwind.config.js
Note: Replace the content array in tailwind.config.js
content: [
	'./src/**/*.{ts,tsx}',
	'./components/**/*.{ts,tsx}',
],  
Note:  ./src/**/ means that tailwind should apply on all ts or tsx files in the src and its sub folders
If we want to apply the tailwindcss on others files like html add the extensions in that line
Note: If you have not selected to create src directory while building project then you have to add the path of app directory on the content section of the tailwind.config.js file

Step # 4 : Now go to page.tsx file in the src/app folder and remove all the code written inside the Home(). We will add code in this function in next steps

Step # 5 : Our assignment is to build GUI like this https://full-stack-ecommerce-clothing-web.vercel.app/
In Next.js and React we should work by building components so that these components can be used when and where they are required and we don't have to write the same code of lines again. Another benefits of using components is that we just need to make changes in the component code and all the placed where this component is called will be updated automatically.

Step # 6 : Our first step is to create Navigation Bar for the Project. It would be easir for developer if he divides the page into different sections. Similiarly we will develop the project using components appraoch.
So create a Components folder inside the src directory. Then create another folder Layout in it. Normally it is a practice that inside the Layout folder you keep the Header and Footer Components, as these components are normally used on every page of the website.

Step # 7 : Create a folder named components inside the src folder. Then another folder named layout in the components folder. Now create a file Header.tsx in the layout folder. write the following code in it.
const Header = () => {
  return (
    <div>Header</div>
  )
}
export default Header

Step # 8 : Now this component can be imported in other pages. For Example this can be called in the src/app/pages.tsx as :   import Header from '@/components/layout/Header'  Now this can be called inside the Home() as <Header/>
Note :  @ by default is the path of src folder which is defined inside the tsconfig.json file. 
'@/components/layout/Header' means inside the src folder there are folders of  components/layout/Header . This helps us to use the same import statment in any other path.
If you want to view the complete path of this file you need to add  "baseUrl": ".",  inside the tsconfig.json above the "paths" paramter :
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]

Step # 9: Now we can import Header in the Layout.tsx. It is a wrapper for all pages. This layout is applied on all pages. {children} represents that page so we can add before or after the page. So if we add the Header Code before {children} in layout.tsx file then it will be added at start of each page. Now we can remove the Header coded added previouly . 

Step # 10: Now lets design our Nav menu in the Header. The Navigation menu contains a logo , 4 links , 1 search bar and a cart icon. Now 1st of all we will download the site logo and place it inside the public folder of the project.
Note: Any thing that is placed in the public is consider static and it can be accesed as '/public/filename'
Now as it is present in the public folder and we have to use it in the Header so will 2st import it as :  import logo1 from '/public/logo.webp'
Now we will use the next.js Image to display Image. we can import it as : import Image from "next/image"
and use this code to show image as :  <Image src={logo1} height={150} width={150} alt="Logo Image"></Image>

Step # 11 : Now We have to add the Navigation bar. Best practice is to add html first then style them. For the NAvigation bar use the following code inside the header.tsx file defualt function
    <div className='flex bg-red-300 justify-between items-center py-6 p-x-8'>
      <Image src={logo1} height={150} width={150} alt="Logo Image"></Image>
      <ul className='flex gap-10'>
        <li> Female </li>
        <li> Male </li>
        <li> Kids </li>
        <li> All Products </li>
      </ul>
      <div className='h-10 w-10 rounded-full bg-gray-300'></div>
    </div>

Step # 12 : Now we have to add the Link on our Navigation Bar Items . We will use the Next.js Link component for this purpose. For this we need to first import it as : import Link from 'next/link' . <Link> tag contains a href property which specifies the link where this link will go whenever it is clicked. So we will change the <li> items as :
  <li className='text-lg'> 
    <Link href="/"> Female  </Link>
 </li>

 Step # 13 : Add the Lucide-REact Icons library
 You first need to install the Lucide-React Icons Library as. npm  install lucide-react
 After that you can import it as import {ShoppingCart} from 'lucide-react'
 To get information about available icons you can visit their website at https://lucide.dev/
<div className='h-10 w-10 rounded-full bg-gray-300 flex justify-center items-center'>
  <ShoppingCart className='w-6 h-t6 '></ShoppingCart>
 </div>

 Step # 14 : Add Search Bar
 We can use default input type or we can go for Shadcn Input. But for that you need to install the shadcn input as : npx shadcn-ui add input. Now next step is to import it from the location where this component is isntalled.
 For this project we will import as import { Input } from   '../../../components/ui/input' . Now we can add code as to use the Shadcn UI as :
       <div>
      <Input type="email" placeholder="Search" />
      </div>


Step # 15: Now we will create different sections of our page for this we will create a views folder in the src. This is not a Hard and Fast Rule but a industry best practice that we should also follow. All the components will be in components folder created inside app and all the sections will be in views folder.
Now our first section is Hero Section. So create a Hero.tsx file in the view folder and write the following code:
import React from "react";

 const Hero=() => {
    return (
        <div>Hero</div>
    )
 }

 export default Hero

Note: We will use <section> tag instead of the first <div> tag. As we will use semantic web and google will understand that a section starts from here. Sections works like div there is not much difference between themn but it is considered to be a good practice to use section tag.
Now we will create two divs as our Hero Section contains two parts. One div for Left Side Portion and one div for Rihgt Hand side portion.

Step # 17 : LHS Div of the Hero Section
17(a) : First of all we need to add a Badge in this portion of Hero Section for this we will use the Shadcn Badge. TO install badge we can use the command : npx shadcn-ui@latest add badge on terminal window.
Next step is to import that in the Hero.tsx file so that we can use it. Now we can use that as : <Badge>Badge</Badge>
 We can also customize the effects as :  <Badge className="py-3 px-6 rounded-lg bg-blue-200 text-blue-700 hover:bg-blue-300">Sale 70%</Badge> This is one method to customize. Another method is by changing in the component installed at src/components/ui/badge.
 This is the benefir of Shadcn. In Chakra UI the components are insalled in the node_module so you cannot change the component setting. SO in the Badge file inside the components/ui search for hover and reomve that code.

 17(b) : Now next task is to add a Text using H1 code using Shadcn. for this we can also copy the text from Typography Shadcn as :  <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-6">
                   An industrial take on Streetwear 
              </h1>
Note : Here in the className tags we have added mt-6 which means margin from top.

17(c) : Now in the next step we have to add the text paragraph so will copy the code from the Shadcn Typography as: <p className="leading-7 [&:not(:first-child)]:mt-6">
        Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits..
    </p>

17(d) : Not in the next need to add a button with the icon. For that we will again use a Shadcn component Button. But we need to first install the Button as : 
npx shadcn-ui@latest add button
In the next step we need to import that as : 
import { Button } from "@/components/ui/button"
Now we can use it in the Hero Section as :  
        <Button className="mt-3 bg-black py-3 px-6">
            Start Shopping
        </Button>

17(e) : Brand Logos : Next step is to add Brand Logos in a line as :
 <div className="flex py-8">
        <Image src={Featured1}  alt="Featured Image 1" className="mx-4" ></Image>
        <Image src={Featured2}  alt="Featured Image 2" className="mx-4"></Image>
        <Image src={Featured3}  alt="Featured Image 3" className="mx-4"></Image>
        <Image src={Featured4}  alt="Featured Image 4" className="mx-"></Image>
 </div>
          

Step 18 : RHS Div of the Hero Section
Now we have to add a image on the RHS div. First of all get that image. Place it in the public folder. You can also create image folder and place all images there. 
To add image first we have to import the image and the Image control to display that image as :
import Hero_img from "/public/Hero_img.webp"
import Image from "next/image"
Now we can place thgat image as : <Image src={Hero_img}  alt="Hero Image"></Image>

Step # 19 :  Now our next task is to place all these in a line. So we have to search for tag that is parent of both of them and add flex and padding inside the clasName as tag as: className="flex px-6 py-6 "
Note : As we have to keep the same x axis padding for all components except Header and Footer so in such case we have to put such in the Layout.tsx file . So we will remove the px-6 tag from the above mentioned <div> and then place that in the layout.psx as :  <main className='px-8'>   {children} </main>
So we have wraapped the main portion not the header and footer

Step # 20 : Align items in the flex andding responsiveness support
20(a) : Now we need to make the same size for both LHS and RHS divs. So for that we will give same flex to both as : <div className="flex-1">

20(b) : Now we want to add support for the Responsiveness in that section. 
Note: By defualt direction of the flex is row. We want to change it to column for mobile devices.
To add responsive ness first for mobile set the direction of the flex to col as flex-col and for large screen we will set as row using command lg:flex-row . So the code we will write would be :   
<div  className="flex flex-col lg:flex-row gap-y-10 py-6"> 

Step 21: Now we will develop the Products List Portion, For this we will create a new ProductList.tsx file. Write the following code in it:
import React from "react";
 const ProductList=() => {
    return (
        <div>Hero</div>
    )
 }
 export default ProductList
Note: This will list all the Products we want to show . To use this feature we will first create a Product Component so that we create the component once and then use it in this file when and where we want to use it.
Lets first create a ProductCard Component

Step 22: To create a Product Component we will create a file ProductCard.tsx in the src/component/ui folder
Add following code in it:
import React from "react";
import Image, { StaticImageData } from "next/image"
function ProductCard(props:{title:string,price:number,img:StaticImageData}) {
    return (
        <div className="m-10">
            <Image src={props.img} alt="Brushed Raglan Sweatshirt"></Image>
            <h3 className="font-bold text-lg mt-3"> {props.title}</h3>
            <p className="font-bold text-lg "> $ {props.price}</p>
          
        </div>
    )
 }
 export default ProductCard
Lets explain the code line by line. In the starting two lines we have imported React, Image and {StaticImageData} from "react" and "next/image"
Then we have defined a function name ProductCard() and passed parameters in it. props is a reserve word it means that we are passing a object. After props we have specified a : and then {title:string}, it means that we are passing a parameter of type string. for image we have to specify type StaticImageData. We can get the values of these paraters in side the code using {pops.title}
Now our component is ready so we can now use it.

Step 23: As we have created a ProductCard component we can call it as :
import React from "react";
import Image,{StaticImageData} from "next/image"
import P1 from "/public/p1.png"
import P2 from "/public/p2.png"
import P3 from "/public/p3.png"
import ProductCard from "@/components/ProductCard";
 const ProductList=() => {
    return (
        <div className="flex justify-evenly">
            <ProductCard title="Brushed Raglan Sweatshirt" price={195} img={P1} />
            <ProductCard title="Brushed Bomber" price={255} img={P2}/>
            <ProductCard title="Flex Sweatshirt" price={175} img={P3}/>         
        </div>
    )
 }
 export default ProductList
In the above mentioned codem we have called ProductCard three times to add three products. We have passed different Title ,  Price and Image for all the three products.


08-Jul-2023
Step 24: How to Add Meta Data / Title on each page
In Layout.tsx file containts following code :
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
It means that default title for each page is Create Next App. But we can change title for each page and in that case that title will over ride the default title. To define a title for each page we will create the below mentioned function on each page. Please note the name of the function is case senstive and must be the same
export const generateMetadata = () => {
  return {
    title : "Dine Market | Home ",
  };
}

Step 25: How to set Navigation Bar Menu Links
Here we have written code in the Header Component that contains Navigation Menu Links
Then we called that Header Component in the Layout.tsx file so that This Header Menu is visible on all pages
Now we will add routing so that whenever the user clicks any menu item that item page is displayed
In the Header.tsx componenet add the linkname as :
        <li className='text-lg'> 
            <Link href="femaleproducts"> Female  </Link>
        </li>
Now create a folder named "femaleproducts" in the app folder. Name should be same case and spelling
Now add page.tsx file in it. Add the generateMetadata() and the Page defult function in it, and add some data in the div section for example :
export default function femaleProducts()  {
  return (
    <div>Female Products</div>
  )
}
Now when ever the User will Click the Female Menu Link this page will be called. Similarly add the links for the rest of the Navigational Menu items by creating folder and then adding page.tsx in it.




















































====================================================================================================================================================================================================================================================
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

