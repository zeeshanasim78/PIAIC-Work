Lecture URL :
https://www.youtube.com/watch?v=loG4NOwbeU0

Sir Zia Repo Link for Builind Project using Shadcn
https://github.com/panaverse/learn-nextjs/tree/main/step07_styling/tailwindCSS/step12_shadcn_ui/step00_helloworld

Steps
================================================================================================================
Step # 1 : Create a Next.js project using command : npx create-next-app@latest

Step # 2 : Initialize the Shadcn using the command : npx shadcn-ui init
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








