var numbers = [1,2,3,4,5]

total = numbers.reduce(function(accumulater,course) {
    return accumulater +course;
},0)
totall = 0;
for(i=0; i<numbers.length; i++) {
    totall += numbers[i];
}
console.log();