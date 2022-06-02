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
var isFree = courses.some(function(course,index) {
    return course.mssv === 18068681;
})
console.log(isFree)