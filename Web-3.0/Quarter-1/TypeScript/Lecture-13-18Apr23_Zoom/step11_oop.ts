//# Object Oriented Programming with TypeScript
// https://www.typescriptlang.org/docs/handbook/2/classes.html
// https://birdeatsbug.com/blog/object-oriented-programming-in-typescript
// https://betterprogramming.pub/understand-object-oriented-programming-with-typescript-c4ff8afa40d
// https://dev.to/kevin_odongo35/object-oriented-programming-with-typescript-574o

class Point {  /// Point is Class Name
    x:number = 0;  /// x and y are the properties of Class Point
    y:number = 0;

    constructor(x:number , y:number) {
        this.x = x;
        this.y=y;
      }
  }
   
  const pt = new Point(6,8);
  
  console.log(`${pt.x}, ${pt.y}`);

  class GoodGreeter {
    name: string;
   
    constructor() {
      this.name = "hello";
    }
  }

