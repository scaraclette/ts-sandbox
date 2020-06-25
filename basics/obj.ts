// const person: {
//     name: string;
//     age: number;
// } = {
//     name: "Si chonky",
//     age: 7
// };

// ENUM
enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
    name: 'Si',
    age: 7,
    hobbies: ['Singing', 'Playing'],
    role: Role.ADMIN
}

let favoriteActivities: any[]; // JavaScript like
favoriteActivities = ['sports', 'chonky'];

console.log(person.name);

// JS
for (const hobby of person.hobbies) {
    console.log(hobby);
    // Can handle the following
    console.log(hobby.toUpperCase());
}

if (person.role == Role.ADMIN) {
    console.log("Person is admin");
}
// Supports tuple: fixed length/type array role: [number, string]
// push is exception. Use tuple when you know what length and type the 'array' will