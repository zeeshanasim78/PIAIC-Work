// https://www.typescriptlang.org/docs/handbook/2/classes.html

// Classes can declare index signatures; these work the same as Index Signatures for other object types:

// Because the index signature type needs to also capture the types of methods, it’s not easy to usefully use these types. Generally it’s better to store indexed data in another place instead of on the class instance itself.


class MyClass {
    [s: string]: boolean | ((s: string) => boolean);
   
    check(s: string) {
      return this[s] as boolean;
    }
  }

  const objMyClass = new MyClass();
  objMyClass.check("Test Value");
  