Array.prototype.reduce2= function(callback,total) {
    for(i=0; i<numbers.length; i++){
        total = callback(total,this[i], i ,array);
    }
    return total;
}

var numbers = [1,2,3,4,5]

total = numbers.reduce2(function(accumulater,course) {
    return accumulater +course;
},0)
console.log(total)
