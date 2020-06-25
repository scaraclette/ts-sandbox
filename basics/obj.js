"use strict";
// const person: {
//     name: string;
//     age: number;
// } = {
//     name: "Si chonky",
//     age: 7
// };
// ENUM
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: 'Si',
    age: 7,
    hobbies: ['Singing', 'Playing'],
    role: Role.ADMIN
};
var favoriteActivities; // JavaScript like
favoriteActivities = ['sports', 'chonky'];
console.log(person.name);
// JS
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
    // Can handle the following
    console.log(hobby.toUpperCase());
}
if (person.role == Role.ADMIN) {
    console.log("Person is admin");
}
// Supports tuple: fixed length/type array role: [number, string]
// push is exception. Use tuple when you know what length and type the 'array' will
