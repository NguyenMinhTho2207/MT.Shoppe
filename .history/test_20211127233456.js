function test(log,isAlert=false,type="log") {
    if(isAlert) {return alert(log)}
    console[type](log);
}
test('abc',true,'warn');