var myArray = [1,2,[3,4],5,6]
array = myArray.reduce(function(course,i) {
    return course.concat(i)
},[])
console.log( array)