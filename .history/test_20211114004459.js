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
total = 0;
for(i=0; i<courses.length; i++) {
    total+= courses[i].mssv;
    console.log(courses[i].name);
}
console.log(total);