var promise = new Promise(
    function(resolve,reject) {
        //Thành công
        resolve();
        //Thất bại
        reject();
    }
)
promise.
then(
    function(e) {
    console.log('thành công')
    }
)
.catch(
    function() {
        console.log('thất bại')
    }
)
promise