Array.prototype.map2 = function(callback) {
    console.log(this)
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