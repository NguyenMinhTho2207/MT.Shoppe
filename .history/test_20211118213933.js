Array.prototype.filter2 = function(callback) {
    var output = [];
    for(i=0; i<this.length; i++){
    var result =  callback(this[i])
    if(result){
    return result;
        
    }
        
       
    }
    return result;
    
}
var courses = [
    'php',
    'javascript',
    'html.css',
    'php',
    'php'
]
htmls = courses.filter2(function(course, i) {
    return course == 'html.'
})
console.log(htmls)