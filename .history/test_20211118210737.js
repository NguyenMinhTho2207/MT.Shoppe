Array.prototype.map2 = function(callback) {
    output = [];
    for(i=0; i<this.length; i++){
        result = callback(this[i],i)
        output.push(result);
    }
    return output;
}
var courses = [
    'javascript',
    'php',
    'java'
]
var htmls = courses.map2(function(course,index) {
    return `
        <h2>${course}</h2>
    `;
})
console.log(htmls)