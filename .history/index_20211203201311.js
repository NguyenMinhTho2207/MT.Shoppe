function highAndLow(numbers){
    numbers = numbers.split(' ');
    return a = `${Math.max(...numbers)} ${Math.min(...numbers)}`;
  }
  console.log(a)
  highAndLow("1, 2, 3, 4, 5, 6");
  