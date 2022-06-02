// Object constructor
function User(name,mssv,address) {
    this.name=name;
    this.mssv= mssv;
    this.address = address;
    this.getName= function(name) {
        return this.mssv =name;
    }
}
User.prototype.className = 'F8';
var user = new User('Nguyễn Minh Thọ',18068681,'207 Tô Hiến Thành');
var author = new User('Sơn Đặng',123456,'SG');
user.title = 'abc';
author.ade = 18;
console.log(user.className);
console.log(author.className);



