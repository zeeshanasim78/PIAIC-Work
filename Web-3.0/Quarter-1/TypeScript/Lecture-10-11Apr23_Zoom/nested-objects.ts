// Nested Object
// We have create a type Author that has two properties firstName and lastName
type Author = {
    firstName: string;
    lastName: string;
};

// Now we cam define a property of type Author in another type as 
type Book = {
    author: Author;
    name: string;
};

const myBook : Book = {
    author: {
        firstName: "Zia",
        lastName: "Khan"
    },
    name: "My Best Book"
}