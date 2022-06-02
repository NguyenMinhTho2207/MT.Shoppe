
var language1 =[
    'javascript',
    'php',
    'java',
];
function languages() {
    myString = '';
    for(var i of arguments){
        myString += `${i} -` ;
        console.log(myString)
    }
   
}
languages('aaa','aaa');




