let fibonacci = (num) => {
  return n <= 1 ? 1 : fibonacci(num - 1) + fibonacci(num - 2);
};

console.log(fibonacci(7));
