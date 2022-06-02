Array.prototype.some2 = function(callback) {
    var output=[];
    for(i in this) {
        if(this.hasOwnProperty(i)){
            var result= callback(this[i],i,this)
            if(result){
                return result
            }
        }
    }
    return false
    
}
var courses = [
    'php',
    'javascript',
    'html.css',
    'php',
    'php'
]
htmls = courses.some2(function(course, i,Array) {
    return course == 'php'
})
console.log(htmls)