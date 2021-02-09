let fibonacci = (num) => {
  return num <= 1 ? 1 : fibonacci(num - 1) + fibonacci(num - 2);
};

console.log(fibonacci(7));
