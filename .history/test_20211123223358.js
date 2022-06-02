var promise = new Promise(
    function(resolve,reject) {
        //Thành công
        resolve('aaa');
        //Thất bại
        reject();
    }
)
promise.
then(
    function(e) {
    console.log(e)
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