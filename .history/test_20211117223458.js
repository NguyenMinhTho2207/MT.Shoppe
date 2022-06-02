var myArray = [
    [1,2],
    [3,4],
    [5,6]
]
myArray.find(function(course,i) {
    console.log(i);
    return course,i;
})
console.log(myArray)