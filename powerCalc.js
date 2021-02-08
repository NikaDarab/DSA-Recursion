let powerCalculator = (base, exp) => {
  return exp === 0 ? 1 : base * powerCalculator(base, exp - 1);
};

console.log(powerCalculator(4, 2));
