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
var i=0;
function coinHandler(accumulater,currentValue,currentIndex) {
    console.table({
        'gia trị hiện tại:' :i,
        'biến lưu trữ:' : accumulater
    })
    return 100;

}
var total = courses.reduce(coinHandler,0);
