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
        mssv: 18068681
    }
];
var isFree = courses.every(function(course,index) {
    return course.mssv === 18068681;
})
console.log(isFree)