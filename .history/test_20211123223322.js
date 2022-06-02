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
    function(e) {
        console.log('thất bại')
    }
)
.finally(
    function(e) {
        console.log('Done')
    }
)