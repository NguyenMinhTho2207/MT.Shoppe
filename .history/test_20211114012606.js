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

function coinHandler(accumulater,currentValue,currentIndex) {
    
    console.table({
        'gia trị hiện tại:' currentIndex,
        'biến lưu trữ:' : accumulater,
        'giá trị hiện tại' :currentValue.mssv
    })
    return accumulater += currentValue.mssv;

}
var total = courses.reduce(coinHandler,0);
console.log(total)