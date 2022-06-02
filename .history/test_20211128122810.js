var object = {
    name: 'thọ',
    age: 21
}
var {name, ...rest} = object

console.log(name, rest)