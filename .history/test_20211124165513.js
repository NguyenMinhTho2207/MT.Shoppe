var promise1 = new Promise(
    function(resolve,reject) {
       setTimeout(function() {
           resolve([1])
       },2000)
    }
)
var promise2 = new Promise(
    function(resolve,reject) {
       setTimeout(function() {
        resolve([2,3])
       },3000)
    }
)
Promise.all([promise1,promise2])
    .then(function(result) {
        
        var a = result.map(function(course) {
            var course1 = course[0]
            var course2 = course[1]
            return course1.concat(course2)
        })
        console.log(a)
    })