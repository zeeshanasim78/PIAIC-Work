// https://www.typescriptlang.org/docs/handbook/2/classes.html

// Implements Clause
// Like other languages with object-oriented features, classes in JavaScript can inherit from base classes.
// You can use an implements clause to check that a class satisfies a particular interface. 
// An error will be issued if a class fails to correctly implement it:


// Note :  Classes may also implement multiple interfaces, e.g. class C implements A, B {.

interface Pingable {
    ping(): void;
  }
   
  class Ship {
    addSonar(pinagable : Pingable){

    }
  }

  class Sonar implements Pingable {
    ping() {
      console.log("ping!");
    }
    pong(){
        console.log("pong!");
    }
  }
 
  class AdvancedSonar implements Pingable {
    ping() {
      console.log("Advance Sonar Class Ping!", "Implements the Pinable Interface");
    }
    pong(){
        console.log("Advance Sonar Class Pong!");
    }
  }

  // Note  : The class Ball declared below will generate error as it implements the Pinable Interface but does not provide the defination of ping() defined in the Interface
 /* class Ball implements Pingable {
  //Class 'Ball' incorrectly implements interface 'Pingable'.
// Property 'ping' is missing in type 'Ball' but required in type 'Pingable'.
    pong() {
      console.log("pong!");
    }
  }
  */