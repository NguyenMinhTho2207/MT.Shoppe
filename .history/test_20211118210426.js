Array.prototype.map2 = function(callback) {
    for(i=0; i<this.length; i++){
        result = callback(this[i],i)
    }
}
var courses = [
    'javascript',
    'php',
    'java'
]
var htmls = courses.map2(function(course,index) {
    console.log(course,i)
})
// console.log(htmls.join(''));