function test(log,isAlert) {
    if(isAlert) {return alert(log)}
    console.log(log);
}
test('abc',true)