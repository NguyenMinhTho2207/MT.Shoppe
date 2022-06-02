Array.prototype.filter2 = function(callback) {
    for(i in this) {
        if(this.hasOwnProperty(i)){
            callback(this[i],i,this)
        }
    }
    
}
var courses = [
    'php',
    'javascript',
    'html.css',
    'php',
    'php'
]
htmls = courses.filter2(function(course, i,Array) {
    console.log(i,course,Array)
})
// console.log(htmls)