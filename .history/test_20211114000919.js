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
var c = [
    {
        name:'Thọ',
        mssv: 18068681
    }
]
var newObject = {};
var isFree = courses.filter(function(course,index) {
    return c.indexOf(course) !=1;
})
isFree? console.log('true') : console.log('false')
