var myArray = [
    [1,2],
    [3,1],
    [1,3]
]
array = myArray.filter(function(course,i) {
    return course[i] == 1;
})
console.log(array)