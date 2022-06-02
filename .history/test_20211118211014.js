Array.prototype.forEach2 = function(callback) {
    for(i=0; i<this.length; i++){
        callback(this[i], i)
    }
}
var courses = [
    'php',
    'javacsript',
    'html.css'
]
htmls = courses.forEach2(function(course, i) {
    console.log(course,i)
})