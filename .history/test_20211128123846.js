var course = {
    name: 'thọ',
    age: 21,
    children: {
        name: 'thắm'
    }
}
var {name:parentName, children: {name:childrenName}} = course

console.log(parentName, childrenName)
