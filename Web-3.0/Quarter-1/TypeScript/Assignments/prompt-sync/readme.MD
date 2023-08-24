Creating , Compiling and Executing Your Next.js Project

1.	Start the VS Code . Select the folder where you want to create project in VSCode using Menu File-Open Folder option

2.	Create a new file in that folder using the create new file icon and rename it as index.ts

3.	To add tsconfig.json file for your project as: tsc --init
    Note : tsconfig.json file is a file of JSON format which allows us to point the root level files and different compiler options to setup that require to compile a TypeScript based projects. The existence of this file in a project specifies that the given directory is the TypeScript project root folder.  The tsconfig.json file mainly consists of the information for the following:
•	Compiler Options , Compile OnSave , Files , Include , Exclude

4.	Next step is to create package.json file we use npm command as : npm init -y to create file with default options. 
    Note: The package.json file is the heart of any Node project. It records important metadata about a project which is required before publishing to NPM, and also defines functional attributes of a project that npm uses to install dependencies, run scripts, and identify the entry point to our package.

5.  Now write the Type Script code 

6.	Now to compile this file from VSCode write on its terminal window:   tsc index.ts

7.	This will create a js file of same name. So index.js file will be created in the same folder

8.	Now you can run this js file from VSCode terminal window using command : node index.js
