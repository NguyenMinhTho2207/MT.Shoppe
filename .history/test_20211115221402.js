function myInfo(firstName,lastName) {
    this.Ten = firstName,
    this.Ho = lastName
}
myInfo.prototype.age = 21;
var author = new myInfo('Thọ','Nguyễn');
var user = new myInfo('Đỗ','Thắm');
console.log(author);
console.log(user);