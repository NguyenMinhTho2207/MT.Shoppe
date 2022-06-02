var array = ['php','javascript','ruby']

function rest (...rest) {
    console.log(rest);
}
rest(...array)
console.log(typeof (...array))
