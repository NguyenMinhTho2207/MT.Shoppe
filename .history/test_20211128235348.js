function highlight ([first,...rest],...string) {
    return string.reduce(
        accumulator,currentValue) => [accumulator,`<span>${currentValue}</span>`,rest.shift()],
    [first]
}

var course = 'Javascript';
var brand = 'F8';
var feel = 'vui'
var htmls = highlight`Học lập trình ${course} tại ${brand} thật ${feel} !`
console.log(htmls)