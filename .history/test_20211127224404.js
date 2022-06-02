function Course(name,price) {
    this.name = name;
    this.price = price;
}
var phpCourse = new Course('thọ',10000);
var jsCourse = new Course('thắm',1000);
console.log(phpCourse,jsCourse)