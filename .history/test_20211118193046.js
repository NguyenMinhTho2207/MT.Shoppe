Array.prototype.reduce2= function(callback,total) {
    var i = 0;
    if(arguments.length<2){
        i = 1;
        total = this[0]
    }
    for(i=0; i<this.length; i++){
        total = callback(total,this[i], i ,this);
    }
    return total;
}

var numbers = [1,2,3,4,5]

total = numbers.reduce2(function(accumulater,course) {
    return accumulater +course;
},0)
console.log(total)
