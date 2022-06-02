var myArray = [
    {
        name: "minh thọ",
        id: 2
    },
    {
        name: "minh thọ",
        id: 2
    },
    {
        name: "minh thọ",
        id: 2
    },
]
array = myArray.map(function(course,i) {
    return `<h2>${course.name}</h2>`
})
console.log(array)