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
    return accumulater + currentValue.mssv;
}
var total = courses.reduce(coinHandler,0);
console.log(total)