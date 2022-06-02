var myArray = [
    {
        name:1,
        id:250
    },
    {
        name:2,
        id:250
    },
    {
        name:1,
        id:250
    }
]
array = myArray.find(function(course,i) {
    console.log(i);
    return course.name == 1;
})
console.log(myArray)