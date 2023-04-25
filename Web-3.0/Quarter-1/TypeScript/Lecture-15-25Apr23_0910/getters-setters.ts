class C {
  _length = 0;
  // Note : It is a programming practice that if a variable name start with _ it is considered as private and we should not directly access that property value
  // We  should only assign or get value using getter and setter functions

    // We can also specify the private keyword before a variable name if we want that this property 
    // private _length; In that that case it will not accessible outside the class
  get length() {
    return this._length;
  }
  set length(value) {
    this._length = value;
  }
}

let obj1=new C();
obj1.length=10;
console.log(obj1.length);