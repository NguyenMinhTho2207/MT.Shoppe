// Array.prototype.filter2 = function(callback) {
//     var output = [];
//     for(i=0; i<this.length; i++){
//     var result =  callback(this[i])
//     if(result){
//         output.push(result)
//         break;
//     }
//     }
    
//     return output;
// }
// var courses = [
//     'php',
//     'javacsript',
//     'html.css',
//     'php',
//     'php'
// ]
// htmls = courses.filter2(function(course, i) {
//     return course == 'php'
// })
// console.log(htmls)

Array.prototype.filter2 = function(callback) {
    let output = [];
    let arrayLength = this.length;
    for(var i=0;i < arrayLength;i++){
    var result = callback(this[i])
    if(result) {
    output.push(this[i])
    }
    }
    return output;
    }
    
    const coures = [
    {
    id: 1,
    name:'PHP'
    },
    {
    id: 2,
    name:'Java'
    },
    {
    id: 3,
    name:'Python'
    },
    {
    id: 4,
    name:'Games'
    },
    {
    id: 5,
    name:'PHP'
    }
    ]
    
    var htmls = coures.filter2(function(element) {
    return element.name ==='PHP'
    })
    console.log(htmls);