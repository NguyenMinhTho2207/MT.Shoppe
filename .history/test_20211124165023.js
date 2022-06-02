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
Promise.all(promise1,promise2)
    .then(function(result) {
        console.log(result)
    })