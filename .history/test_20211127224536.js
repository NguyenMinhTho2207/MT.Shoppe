// function Course(name,price) {
//     this.name = name;
//     this.price = price;
//     this.getCourse = function() {
//         return this.name
//     }
// }
// var phpCourse = new Course('thọ',10000);
// var jsCourse = new Course('thắm',1000);
// console.log(phpCourse.getCourse())

class Course {
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
}
var phpCourse = new Course('thọ',10000);
var jsCourse = new Course('thắm',1000);