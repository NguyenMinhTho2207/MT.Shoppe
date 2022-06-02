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
array = myArray.reduce(function(course,i) {
    return course.id += i.id;
})
console.log( array)