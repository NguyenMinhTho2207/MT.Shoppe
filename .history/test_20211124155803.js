function sleep(time) {
    return new Promise(function(resolve,reject) {
        setTimeout(resolve(sleep(1000)),time)
    })
}
sleep(1000)
    .then(function(a) {
        console.log('1')
        return a
    })
    .then(function() {
        console.log('2')
        return a
    })
    .then(function() {
        console.a
        
    })