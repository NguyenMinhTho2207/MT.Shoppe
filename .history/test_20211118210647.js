Array.prototype.map2 = function(callback) {
    output = []
    for(i=0; i<this.length; i++){
        result = callback(this[i],i)
        output.unShift(result);
    }
    return output;
}
var courses = [
    'javascript',
    'php',
    'java'
]
var htmls = courses.map2(function(course,index) {
    return course;
})
console.log(htmls)