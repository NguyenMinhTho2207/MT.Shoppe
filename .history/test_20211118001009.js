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
    return course.name
})
console.log(array)