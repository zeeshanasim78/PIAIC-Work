Step ~ 1 : Create a new Next.Js Project

Step # 2 : visit Project Placeholder and uses file : https://jsonplaceholder.typicode.com/users
It is free API Rest API website that contains data

Step # 3 : To get data from the website we will use Javascript fetch function . To get data
type User={
"id": number,
"name": string,
"username": string,
"email": string,
"address": {
"street": string,
"suite": string,
"city": string,
"zipcode": string,
"geo": {
"lat": string,
"lng": string
}
},
"phone": string,
"website": string,
"company": {
"name": string,
"catchPhrase": string,
"bs": string
}
};

export async function getAllUsers() {
const response = await fetch("https://jsonplaceholder.typicode.com/users");
const data = await response.json(); // to make this Asysnchronus
//console.log(data);
return data;
}

Step # 4 : Go to page.tsx file in the /src/app folder. Write Code
import Image from 'next/image'
import { getAllUsers } from '../../lib/getAllUsers'

export default async function Home() {
const data = await getAllUsers()
console.log(data)
return (

   <div>Hello World</div>
  )
}

# We can also make this to run in the Browser if we write command "Use Client";

/// "use cleint"; // We can use this if we want to get the console.log data on the browser
/// which we can view from console section of the browser

Step # 5 : .d.ts file
We can create a file with any name in the root folder with .d.ts as ending extension
filename.d.ts file is a declaration file used by a TypeScript program. It contains a description of objects and functions contained in an associated JavaScript library.
So copy the User type created in the getAllusers in that file
type User={
"id": number,
"name": string,
"username": string..
.....
}

And Node.js and Vscode will automatically detect that
Step # 6 : Lets map the fetched data using map function. Write the following code in page.tsx
export default async function Home() {
//const data = await getAllUsers()
const data: User[] = await getAllUsers(); //
console.log(data)
return (

<div>
{
  data?.map(item =>
    (
      <div className=' bg-slate-300 m-5'>
      <h3> Name : {item.name} </h3>
      <h3> Email Address : {item.email} </h3>
      <h3> Phone No : {item.phone} </h3>
      <h3> Address : {item.address.street}, {item.address.city}, {item.address.zipcode} </h3>
      </div>
    )
  )
}
</div>
)
}
