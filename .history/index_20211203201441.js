function highAndLow(numbers){
    numbers = numbers.split(' ');
    console.log(typeof (...numbers));
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
  }
  console.log(highAndLow("1, 2, 3, 4, 5, 6"));
  
  