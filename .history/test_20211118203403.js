function Myfunction(param) {
    if(param === 'function'){

        param('abc');
    }
}
function MyCallBack(value) {
    console.log('abc',value);
}
Myfunction(MyCallBack)