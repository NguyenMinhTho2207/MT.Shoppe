var promise = new Promise(
    function(resolve,reject) {
        //Thành công
        resolve('aaa');
        //Thất bại
        reject('co loi');
    }
)
promise.
then(
    function(e) {
    console.log(e)
    }
)
.catch(
    function(error) {
        console.log(error)
    }
)
.finally(
    function(e) {
        console.log('Done')
    }
)