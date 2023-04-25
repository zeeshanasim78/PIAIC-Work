// Classes may extend from a base class. A derived class has all the properties and methods of its base class, and also define additional members.
// There can be only one extend class
class Animal {
    move() {
      console.log("Moving along!");
    }
  }
   
  class Dog extends Animal {
    woof(times: number) {
      for (let i = 0; i < times; i++) {
        console.log("woof!");
      }
    }
  }
   
  const d = new Dog();
  // Base class method
  d.move();
  // Derived class method
  d.woof(3);