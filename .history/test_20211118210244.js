Array.prototype.map2 = function(callback) {
    for(i=0; i<this.length; i++){
        console.log(this[i])
    }
}
var courses = [
    'javascript',
    'php',
    'java'
]
var htmls = courses.map2(function(course,index) {
    return `
    <h2> ${course}</h2>
    `
})
console.log(htmls.join(''));