
export  async function getAllBooks() {
    const response = await  fetch("https://simple-books-api.glitch.me/books");
    const data = await response.json();  // to make this Asysnchronus
    //console.log(data);
    return data;
}
