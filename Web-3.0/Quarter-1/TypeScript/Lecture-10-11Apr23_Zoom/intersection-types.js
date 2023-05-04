"use strict";
let obj1 = {
    student_id: 3232,
    name: "rita",
    teacher_Id: 7873,
    teacher_name: "seema",
};
// Note : We have to provide all the properties of Teacher and Student
// If any property is missing there will be an error
// It is also important to note we can also use union using |
// But in that case properties of one type can be used at a time
// Where as in Intersection we have to provide both properties values . No PRoperty value should be missing
console.log(obj1.teacher_Id);
console.log(obj1.name);
