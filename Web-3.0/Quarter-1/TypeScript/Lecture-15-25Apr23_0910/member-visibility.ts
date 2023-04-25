// https://www.typescriptlang.org/docs/handbook/2/classes.html
// Member Visibility

// You can use TypeScript to control whether certain methods or properties are visible to code outside the class.

// Public  : 
// The default visibility of class members is public. A public member can be accessed anywhere:

class Greeter {
    public greet() {
      console.log("hi!");
    }
  }
  const g = new Greeter();
  g.greet();

  // Because public is already the default visibility modifier, you don’t ever need to write it on a class member, but might choose to do so for style/readability reasons.

// Protected
// protected members are only visible to subclasses of the class they’re declared in.

class GreeterClass {
    public greet() {
      console.log("Hello, " + this.getName());
    }
    protected getName() {
      return "hi";
    }
  }
   
  class SpecialGreeter extends GreeterClass {
    public howdy() {
      // OK to access protected member here
      console.log("Howdy, " + this.getName());
    }
  }
  const objSpecialGreeter = new SpecialGreeter();
  objSpecialGreeter.greet(); // OK
  //g.getName(); // Will Generate Error
  //Property 'getName' is protected and only accessible within class 'GreeterClass' and its subclasses.


// Exposure of protected members
// Derived classes need to follow their base class contracts, but may choose to expose a subtype of base class with more capabilities. This includes making protected members public:
class BaseClass2 {
    protected m = 10;
  }
  class DerivedClass2 extends BaseClass2 {
    // No modifier, so default is 'public'
    m = 15;
  }
  const objDrivedClass2 = new DerivedClass2();
  console.log(objDrivedClass2.m); // OK


  // Note that Derived was already able to freely read and write m, so this doesn’t meaningfully alter the “security” of this situation. The main thing to note here is that in the derived class, we need to be careful to repeat the protected modifier if this exposure isn’t intentional.



  // Private
  //  private is like protected, but doesn’t allow access to the member even from subclasses:
  class BaseClass {
    private x = 0;
  }
  const objBaseClass = new BaseClass();
  // Can't access from outside the class
  //console.log(objBaseClass.x);
 
 // Property 'x' is private and only accessible within class 'Base'.