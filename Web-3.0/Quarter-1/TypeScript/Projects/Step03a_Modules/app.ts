// Modules
// JavaScript has a long history of different ways to handle modularizing code. TypeScript having been around since 2012,
// has implemented support for a lot of these formats, but over time the community and the JavaScript specification has 
// converged on a format called ES Modules . You might know it as the import/export syntax.

//  Typescript Modules
//  In TypeScript, any file containing a top-level import or export is considered a module. Conversely, a file without any
// top-level import or export declarations is treated as a script whose contents are available in the global scope (and therefore to modules as well).

// Modules are executed within their own scope, not in the global scope. This means that variables, functions, classes, 
// etc. declared in a module are not visible outside the module unless they are explicitly exported using one of the 
// export forms. Conversely, to consume a variable, function, class, interface, etc. exported from a different module,
// it has to be imported using one of the import forms.

// Modules in TypeScript
// There are three main things to consider when writing module-based code in TypeScript:

// Syntax: What syntax do I want to use to import and export things?
// Module Resolution: What is the relationship between module names (or paths) and files on disk?
// Module Output Target: What should my emitted JavaScript module look like?



// This is then imported via:
// To import a method from a js file we use import statement as 
import helloWorld from "./hello.js";

// To import variables a module we canuse import statement as 
import { phi, absolute } from "./maths.js";
// An import can be renamed using a format like import {old as new}:
import { pi as π } from "./maths.js";

// or You can mix and match the above syntax into a single import:
//import RandomNumberGenerator, { pi as π } from "./maths.js";

//You can import a file and not include any variables into your current module
// n this case, the import does nothing. However, all of the code in maths.ts 
// was evaluated, which could trigger side-effects which affect other objects.
import "./maths.js";

console.log("π",π);
 
console.log("phi=",phi);
const absPhi = absolute(phi);

helloWorld();

import { Cat, Dog } from "./animal.js";
type Animals = Cat | Dog;