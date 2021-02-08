let reverseStr = (str) => {
  return str.length === 0
    ? ""
    : reverseStr(str.substr(1)) + str.charAt(0).toLowerCase();
};

console.log(reverseStr("Hello"));
