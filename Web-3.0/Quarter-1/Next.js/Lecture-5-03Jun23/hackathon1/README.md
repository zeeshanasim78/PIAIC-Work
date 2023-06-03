In this hackathon we will build a UI for a website

Step 1: After creating a next.js project our 1st task is to initialize Shadcn using command :
npx shadcn-ui init

Step 2: we will 1st of all we will create a Shadcan Menu bar in the projet. To initlaize the menu bar we have to install the shadcan menu bar as : npx shadcn-ui add navigation-menu

Step 3: We want this Navigation menu bar to appear on all the pages so we will create a component that we will use on every page so that our menu bar is available on all pages

Step 4: We will create a page Nevbar.tsx in the Compnents . Now paste the NavigationMenuBar coding from shadcan in the navbar.tsx file. Check the folder paths in the configuration files of Naviagtaion Menu if some error is generated 

Note: If we set src/app to No during the project creation then it will not create src folder and a app folder will be created in the root that will contains all the code files

The benefit of using without src directory is that when we initiate the shadcn library then we did not need to change any configuration or folder path. The benfit of using the src folder is that it matches the REACT and source code files arranged in a src/app directory

 How to Make our own components 
 ===============================
* First of all we have to create a components folder inside the app folder. This compnenet folder is for our components where as the main components folder contains the Shadcn or other .
* Now component folder inside the app create a file Navbar.tsx . Copy the Shadcn Navigation Menu bar code in it.  
* Now on the Page.tsx import the component as import NBar from {./app/Navbar.tsx}
* Now we can add that component in the page.tsx as <Nbar></NBar>

