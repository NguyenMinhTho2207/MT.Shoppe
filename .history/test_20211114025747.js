Array.prototype.reduce2 = function(callback,result) {
    var i=0;
    if(arguments.length<2){
        result = this[0];
        i=1;
    }
    for( i<this.length; i++){
        
        result = callback(result, this[i],i,this)
    }
    return result;
}


   
var courses=[1,2,3,4]
var result = courses.reduce2(function(total,number) {
    return total + number;
},0)
console.log(result)