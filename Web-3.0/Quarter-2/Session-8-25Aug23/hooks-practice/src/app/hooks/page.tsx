"use client";

import { useState } from "react";

const Home = () => {
  //let a = 0;
  const [a, setA] = useState(0);
  // The state requires variable name as 1st parameter and then a function name that can change that varibale
  // In the above statement we have passed a as 1st parameter and then setA function as 2nd parameter that will
  // change the value of the variable a

  return (
    <div>
      <h1> The Value of State is {a} </h1>
      <button
        className=" bg-cyan-600"
        onClick={() => {
          setA(a + 1);
          console.log(a);
        }}
      >
        Increate State Value
      </button>
      <br />
      <br />
      <button
        className=" bg-red-600"
        onClick={() => {
          setA(a - 1);
          console.log(a);
        }}
      >
        Decrease State Value
      </button>
      <br />
      <br />
      <button
        className=" bg-blue-600"
        onClick={() => {
          setA(0);
          console.log(a);
        }}
      >
        Reset State Value
      </button>
    </div>
  );
};

export default Home;
