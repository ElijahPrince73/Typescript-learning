// const person: {
//     name: string, age: number, hobbies: string[], role: [number, string]
// } = {
//     name: 'Eli',
//     age: 24,
//     hobbies: ['Sports', 'Cooking'],
//     role: [2, 'author']
// }

// const ADMIN = 0
// const READ_ONLY = 1
// const AUTHOR = 2

enum Role {
    ADMIN = 'ADMIN', READ_ONLY = 'READ_ONLY', AUTHOR = 'AUTHOR'
}

const person = {
  name: "Eli",
  age: 24,
  hobbies: ["Sports", "Cooking"],
  role: Role.AUTHOR,
};

// person.role.push('admin')

let favoriteActivities: string[];
favoriteActivities = ['Sports']

console.log(person.name)

for (let activitie = 0; activitie < person.hobbies.length; activitie++) {
    const element = person.hobbies[activitie];
    console.log(element)
}

if (person.role === Role.AUTHOR) {
    console.log('author')
}