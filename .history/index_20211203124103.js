var promise1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve([1]);
    },2000)
})
var promise2 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve([2,3]);
    },5000)
})
promise1
    .then((rs)=>{
        console.log(rs)
    })
promise2
    .then((rs)=>{
        console.log(rs)
    })