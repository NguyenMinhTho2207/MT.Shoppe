function Myfunction(param) {
    param();
}
function MyCallBack() {
    console.log('abc');
}
Myfunction(MyCallBack)