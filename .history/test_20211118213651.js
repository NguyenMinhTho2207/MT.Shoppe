Array.prototype.filter2 = function(callback) {
    var output = [];
    for(i=0; i<this.length; i++){
    var result =  callback(this[i])
    if(result){
        continue
    }
        
       
    }
    
    return result;
}
var courses = [
    'php',
    'javacsript',
    'html.css',
    'php',
    'php'
]
htmls = courses.filter2(function(course, i) {
    return course == 'php'
})
console.log(htmls)