function test(log,isAlert=false) {
    if(isAlert) {return alert(log)}
    console.log(log);
}
test('abc');