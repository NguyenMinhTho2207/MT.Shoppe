function highAndLow(numbers){
    numbers = numbers.split(' ');
    console.log(...numbers);
    return Math.max(...numbers) + ' '+ Math.min(...numbers);
  }
  console.log(highAndLow("1 2 3 4 5 6"));
  
  console.log(Math.min("[1, 2, 3, 4]"))
  a= ["1,2,3,4,5"]
  console.log(a)