function sleep(time) {
    return new Promise(function(resolve,reject) {
        setTimeout(resolve,time)
    })
}
sleep(1000)
    .then(function() {
        console.log('1')
        return 
    })
    .then(function(a) {
        console.log('2')
        return 
    })
    .then(function(a) {
        
        
    })