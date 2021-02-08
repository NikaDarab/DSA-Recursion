let triNumber = (n) => {
  return n <= 1 ? n : n + triNumber(n - 1);
};
console.log(triNumber(6));
