let powerCalculator = (base, exp) => {
  //Base case
  if (exp === 0) {
    return 1;
  }
  //General case
  {
    return base * powerCalculator(base, exp - 1);
  }
};

console.log(powerCalculator(4, 2));
