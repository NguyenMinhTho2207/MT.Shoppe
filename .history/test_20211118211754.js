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
htmls = courses.filter(function(course, i) {
    return course == 'php';
})
console.log(htmls)