Array.prototype.filter2 = function(callback) {
    var output=[];
    for(i in this) {
        if(this.hasOwnProperty(i)){
            var result= callback(this[i],i,this)
            if(result){
                return output.push(this[i])
            }
        }
    }
    return output
    
}
var courses = [
    'php',
    'javascript',
    'html.css',
    'php',
    'php'
]
htmls = courses.filter2(function(course, i,Array) {
    return course == 'php'
})
console.log(htmls)