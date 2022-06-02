var myArray = [
    [1,2],
    [3,1],
    [1,3]
]
array = myArray.map(function(course,i) {
    return {
        name:"minh thọ",
        id:course[0]
    }
})
console.log(array)