function highAndLow(numbers) {
    numbers = numbers.split(' ').map(Number);
    const max = Math.max(...numbers);
    const min = Math.min(...numbers);
    return `${max} ${min}`;
  }
  console.log(highAndLow("1, 2, 3, 4, 5, 6"));
  
  