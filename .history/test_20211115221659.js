function myInfo(firstName,lastName) {
    this.Ten = firstName,
    this.Ho = lastName
    getfullName = function() {
        return `${this.Ho} ${this.Ten}`;
    }
}
myInfo.prototype.age = 21;
var author = new myInfo('Thọ','Nguyễn');
var user = new myInfo('Đỗ','Thắm');
console.log(author.getfullName);
console.log(user);