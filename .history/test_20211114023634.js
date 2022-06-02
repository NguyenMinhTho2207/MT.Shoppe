Array.prototype.reduce2 = function(callback,result) {
    for(i=0;i<=this.length; i++){
        result = callback(result, this[i],i,this)
    }
    return result;
}


   
var courses=[1,2,3,4]
var result = courses.reduce2(function(total,number) {
    return total + number;
},0)
console.log(result)