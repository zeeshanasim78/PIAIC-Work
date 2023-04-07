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



- Edit ts config file for es modeuls(target, module, moduleResolution)
- Generate package.json file with `npm init --yes`
- Add "type": "module" in the package.json file
- Add shebang in your script file `#! /usr/bin/env node`
- Write your calculator code with inquirer
- Add "bin": {"calc": "calculator.js"} in the package.json file
- update your package name from package.json in my case it is @hamzahsyedd/calc where hamzahsyedd is my username
- Test your script locally, `npx calc`
- Signup to npm
- Run the command `npm login`
- Add credentials or it will redirect you to the browser for authentication
- publish the script using `npm publish --access public`
- run command based on the package name in my case it is `npx @hamzahsyedd/calc`

Note:
- Make sure when you add name like @hamzahsyedd/calc, after @ should be your username
if you enter some other name for eg @abc/calc it will throw an error

- When you update your package make sure to change it's version from the package.json file