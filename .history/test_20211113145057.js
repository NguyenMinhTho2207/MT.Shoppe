var myArray = [
    [1,2],
    [3,4],
    [5,6]
]
arrayLength = myArray.length;
for(i=0; i<arrayLength; i++) {
    for(j=0; j<myArray[i].length; j++) {
        console.log(myArray[i][j])
    }
}