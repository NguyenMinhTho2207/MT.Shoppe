var date = new Date();

var day = Math.floor(date.now());
var month = date.getMonth()+1;
var year = date.getFullYear();
console.log(day);

let timestamp = Math.floor(Date.now() / 1000)
console.log(timestamp);
