https://github.com/panaverse/learn-nextjs/tree/main/step22_generative_ai/01_Introduction_LLM_LangChain/01-typescript/01-Guidelines

Step # 1 : Create a folder open Visual Studio Code and install required packages
npm install -S langchain
npm i dotenv
npm i --save-dev @types/node

Step # 2 : Type command to create tsconfig.js file using command : tsc --init

Step # 3 :  Change the following options in the tsconfig.js file
    "target": "ES2017", // or higher
    "module": "nodenext",

Step # 4 : Create Package.json file using command : npm init --y

Step # 5 : Add the following inthe package.json file
 "type": "module",

Step # 6 : Add a .env and add the api key in it
OPENAI_API_KEY="sk-p8B80t************************************"

Step # 7 : Create a index.ts file in it and copy following code in:
 import { OpenAI } from "langchain";
 import 'dotenv/config';

//  console.log(process.env.OPENAI_API_KEY);

const llm = new OpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY,
  temperature: 0.9,
});


async function main() {
  const result = await llm.predict(`What would be a good company name for a company that makes colorful socks?`);
  // Handle the result...
  console.log(result)
}

main();


Step # 8 : Transpile code using tsc and then run it using node command
tsc
node index
