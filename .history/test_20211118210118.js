
var courses = [
    'javascript',
    'php',
    'java'
]
var htmls = courses.map(function(course,index) {
    return `
    <h2> ${course}</h2>
    `
})
console.log(course.join(''));