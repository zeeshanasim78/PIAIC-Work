import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal, PromiseLikeOfReactNode } from "react";

const getTodos = async() => {
    let todos =  await fetch("https://api.ipify.org?format=json")
    return todos.json();
}

export default async function AddTodoList()
{
    const{todos} = await getTodos();
    console.log(JSON.parse(todos));
    console.log("Response Received");

   return  <>{
            <h1>hello world!</h1>
   }</>
}