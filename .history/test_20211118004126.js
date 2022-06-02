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
    return course + i.id;
},0)
console.log(array)