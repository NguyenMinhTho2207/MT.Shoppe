Array.prototype.forEach2 = function(callback) {
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
htmls = courses.forEach2(function(course, i) {
    console.log(course)
})
console.log(htmls)