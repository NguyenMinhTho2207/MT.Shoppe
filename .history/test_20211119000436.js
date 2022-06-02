Array.prototype.find2 = function(callback) {
    var output=[];
    for(i in this) {
        if(this.hasOwnProperty(i)){
            var result= callback(this[i],i,this)
            if(result){
                output.push(this[i])
                break
            }
        }
    }
    return output;
    
}
var courses = [
    'php',
    'javascript',
    'html.css',
    'php',
    'php'
]
htmls = courses.find2(function(course, i,Array) {
    return course == 'php'
})
console.log(htmls)