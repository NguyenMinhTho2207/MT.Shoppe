function Myfunction(param) {
    if(typeof param === 'function'){

        param('abc');
    }
    console.log(param)
}
function MyCallBack(value) {
    console.log('abc',value);
}
Myfunction(MyCallBack)