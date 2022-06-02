function Myfunction(param) {
    if(typeof param === 'function'){

        param('abc');
    }
}
function MyCallBack(value) {
    console.log('abc',value);
}
Myfunction(MyCallBack)