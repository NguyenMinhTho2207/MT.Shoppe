Array.prototype.filter2 = function(callback) {
    output = [];
    for(i=0; i<this.length; i++){
      result =  callback(this[i])
        if(result){
            output.push(result)
        }
    }
    return output;
}
var courses = [
    'php',
    'javacsript',
    'html.css'
]
htmls = courses.filter2(function(course, i) {
    return course == 'php';
})
console.log(htmls)