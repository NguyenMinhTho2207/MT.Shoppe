var object = {
    a: 'a',
    b: 'b',
    c: 'c'
}
var {b,...rest} = object
console.log(b)
console.log(rest)