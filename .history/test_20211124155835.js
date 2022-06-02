function sleep(time) {
    return new Promise(function(resolve,reject) {
        setTimeout(resolve(sleep()),time)
    })
}
sleep(1000)
    .then(function(a) {
        console.log('1')
        return a
    })
    .then(function(a) {
        console.log('2')
        return a
    })
    .then(function(a) {
        console.a
        
    })