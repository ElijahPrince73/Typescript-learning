const person = {
    name: 'Eli',
    age: 24,
    hobbies: ['Sports', 'Cooking']
}
let favoriteActivities: string[];
favoriteActivities = ['Sports']

console.log(person.name)

for (let activitie = 0; activitie < person.hobbies.length; activitie++) {
    const element = person.hobbies[activitie];
    console.log(element)
}