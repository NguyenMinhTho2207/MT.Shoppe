var promise1 = new Promise(
    function(resolve,reject) {
       setTimeout(function() {
           resolve([1])
       },5000)
    }
)
var promise2 = new Promise(
    function(resolve,reject) {
       setTimeout(function() {
        resolve([2,3])
       },2000)
    }
)
Promise.all([promise1,promise2])
    .then(function(result) {
        console.log(result)
    })