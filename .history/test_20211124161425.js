function sleep(time) {
    return new Promise(function(resolve,reject) {
        setTimeout(function() {
            resolve(sleep(1000))
        },time)
    })
}
sleep(1000)
    .then(function(a) {
        console.log('1')
        return 
    })
    .then(function(a) {
        console.log('2')
        return 
    })
    .then(function(a) {
        console.log('3')
        
    })