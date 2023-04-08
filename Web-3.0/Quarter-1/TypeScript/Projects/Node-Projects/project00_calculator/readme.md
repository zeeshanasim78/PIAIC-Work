-- This is a Command Line Interface Math Calculator which can perform five operation +,-,*,/ and **(exponent)

-- Create tsconfig.json by using command tsc --init

- Edit ts config file for es modeuls(target, module, moduleResolution)

- Generate package.json file with `npm init --yes`

- Write your calculator code with inquirer

How to publish your package on the NPM (Node Package Manager)
Go to https://www.npmjs.com/signup
Create a login on the website

Before You Publish your package.json
"main":"index.js"
"bin":"./index.js"

Add the following line  of code in the index.ts
#!/usr/bin/env node

Now compiple the project
From the Terminal window login on the npm login website

- update your package name from package.json 

- Test your script locally, `npx calc`

- Run the command `npm login` to login on npmjx
- It will redirect you to the browser for authentication

- publish the script using `npm publish --access public`

- run command based on your package name in my case it is `npx cli-math-calc`

Note:
- When you update your package make sure to change it's version from the package.json file