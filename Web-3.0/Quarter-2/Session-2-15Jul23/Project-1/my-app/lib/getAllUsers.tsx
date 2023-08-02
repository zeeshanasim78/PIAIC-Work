

export  async function getAllUsers() {
    const response = await  fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();  // to make this Asysnchronus
    //console.log(data);
    return data;
}
