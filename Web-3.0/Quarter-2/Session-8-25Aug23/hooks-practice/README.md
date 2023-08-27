# Hooks in Next.JS

Hooks allow function components to have access to state and other React features. Because of this, class components
are generally no longer needed. React version 16.8 onwards, hooks are been introduced. React Hooks are functions and serve as a modular replacement for state and lifecycle methods. React Hooks are allowed to use on functional components.

In Simple terms Hooks allows us to change the value of a variable without postback page
To use this we need to use useState. Consider the folling code :

"use client";

import { useState } from "react";

const Home = () => {
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
                }} >
                Increate State Value
                </button>

                <br />
                <br />

                <button
                className=" bg-red-600"
                onClick={() => {
                setA(a - 1);
                console.log(a);
                }} >
                Decrease State Value
                </button>

                <br />
                <br />

                <button
                className=" bg-blue-600"
                onClick={() => {
                setA(0);
                console.log(a);
                }} >
                Reset State Value
                </button>
            </div>
    );

};

export default Home;