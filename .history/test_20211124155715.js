function sleep(time) {
    return new Promise(function(resolve,reject) {
        setTimeout(resolve,time)
    })
}
sleep(1000)
    .then(function() {
        console.log('1')
        return sleep(1000)
    })
    .then(function() {
        console.log('2')
        return sleep(1000)
    })
    .then(function() {
        console.log('3')
        
    })