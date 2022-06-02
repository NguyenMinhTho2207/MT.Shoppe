var promise = new Promise(
    function(resolve,reject) {
        //Thành công
        resolve();
        //Thất bại
        reject();
    }
)
promise.then(
    function(e) {
    console.log('thành công')
    }
)
promise.catch(
    function() {
        console.log('thất bại')
    }
)