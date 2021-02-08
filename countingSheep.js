function countingSheep(n) {
  // Base case
  if (n === 0) {
    return "All sheep jumped over the fence";
  }

  // General case
  console.log(n + ": Another sheep jumps over the fence");
  return countingSheep(n - 1);
}

console.log(countingSheep(5));
