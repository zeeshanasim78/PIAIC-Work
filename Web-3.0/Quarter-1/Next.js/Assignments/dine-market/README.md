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

Step # 9:
52







