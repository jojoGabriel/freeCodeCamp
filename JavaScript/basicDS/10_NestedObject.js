let developer = {
    name: "JoJo",
    age: 25,
    skills: {
        programming: {
            front: 'JavaScript',
            back: 'Java',
            db: ['SQL', 'NoSQL']
        }
    }
}

console.log(developer.skills.programming.db[0]);
