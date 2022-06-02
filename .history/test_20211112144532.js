// Object constructor
function User(name,mssv,address) {
    this.name=name;
    this.mssv= mssv;
    this.address = address;
}
var user = new User('Nguyễn Minh Thọ',18068681,'207 Tô Hiến Thành');
var author = new User('Sơn Đặng',123456,'SG');
console.log(user);
console.log(author);
user.title = 'abc';
author.ade = 18;




