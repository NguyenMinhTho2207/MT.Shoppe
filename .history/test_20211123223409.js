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
    function(e) {
        console.log(erro)
    }
)
.finally(
    function(e) {
        console.log('Done')
    }
)