function highAndLow(numbers){
    numbers = numbers.split(' ');
    console.log(...numbers);
    console.log(${Math.max(...numbers)})
    return ` ${Math.min(...numbers)}`;
  }
  console.log(highAndLow("1, 2, 3, 4, 5, 6"));
  
  