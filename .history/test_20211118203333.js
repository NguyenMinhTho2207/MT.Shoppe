function Myfunction(param) {
    param('abc');
}
function MyCallBack(value) {
    console.log('abc',value);
}
Myfunction(MyCallBack)