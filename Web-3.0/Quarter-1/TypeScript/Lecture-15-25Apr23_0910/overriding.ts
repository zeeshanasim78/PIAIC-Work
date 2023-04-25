// https://www.typescriptlang.org/docs/handbook/2/classes.html
// Over Riding Methods
// A derived class can also override a base class field or property. You can use the super. syntax to access base class methods. 
// Note that because JavaScript classes are a simple lookup object, there is no notion of a “super field”.
// TypeScript enforces that a derived class is always a subtype of its base class.

// 
class Base {
    greet() {
      console.log("Hello, world!");
    }
  }
   
  class Derived extends Base {
    greet(name?: string) {
      if (name === undefined) {
        super.greet();
      } else {
        console.log(`Hello, ${name.toUpperCase()}`);
      }
    }
  }
   
  const objDrived = new Derived();
  objDrived.greet();
  objDrived.greet("reader");

  // It’s important that a derived class follow its base class contract. 
  // Remember that it’s very common (and always legal!) to refer to a derived class instance through a base class reference:

  // Alias the derived instance through a base class reference
const objBase: Base = objDrived;
// No problem
objBase.greet();