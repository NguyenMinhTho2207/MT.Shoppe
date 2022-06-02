var course = {
    name: 'thọ',
    age: 21
    children: {
        name: 'thắm'
    }
}
var {name:parentName, children{name}} = course

console.log(parentName, name)
console.log( rest)