https://github.com/panaverse/learn-nextjs/tree/main/step22_generative_ai/01_Introduction_LLM_LangChain/01-typescript/01-Guidelines


Step # 1: In the folder 1st create tsconfig.js file using command  tsc --init

Step # 2 : Create the package.json file usning command npm init -y

Step # 3 : Add index.ts file

Step # 4 :  Install the dependencies
npm install -S langchain
npm i dotenv
npm i --save-dev @types/node

Step # 5 : Update tsconfig.json by changing properties as follows
{
  "compilerOptions": {
     ...
    "target": "ES2020", // or higher
    "module": "nodenext"
    "moduleResolution": "NodeNext",    
  }
}

Step # 6 : Update package.json and following to it before scripts
"type": "module",

Step # 7 : 


