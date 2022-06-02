var myArray = [
    [1,2],
    [3,4],
    [5,6]
]
array = myArray.find(function(course,i) {
    return course[i] ==1;
})
console.log(array)