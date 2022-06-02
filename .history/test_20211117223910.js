var myArray = [
    [1,2],
    [1,1],
    [5,6]
]
array = myArray.filter(function(course,i) {
    return course[i] == 1;
})
console.log(array)