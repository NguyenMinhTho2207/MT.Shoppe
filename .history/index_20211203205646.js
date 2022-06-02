function highAndLow(numbers){
    numbers = numbers.split(' ');
    
    return Math.max(...numbers)   + Math.min(...numbers);
  }
  console.log(typeof highAndLow("1 2 3 4 5 6"));
  
  