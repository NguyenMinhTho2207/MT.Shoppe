var courses = [
    {
        name: 'Thọ',
        mssv: 18068681
    },
    {
        name: 'Thọ',
        mssv: 18068681
    },
    {
        name: 'Thọ',
        mssv: 88
    }
];
var newObject = {};
var isFree = courses.forEach(function(course,index) {
    console.log(newObject[course.name]);
})
