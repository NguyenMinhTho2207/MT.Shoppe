var numbers = [1,2,3,4,5]

total = numbers.reduce(function(accumulater,course) {
    return accumulater +course;
},0)
console.log(total)