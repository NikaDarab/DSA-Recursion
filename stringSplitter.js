let stringSplitter = (str, splitter) => {
  if (!str.includes(splitter)) {
    return str;
  }
  const x = [str.slice(0, str.indexOf(splitter))];
  const y = str.slice(str.indexOf(splitter) + 1);
  return x.concat(stringSplitter(y, splitter));
};
console.log("String Split Answer", stringSplitter("20/20/2020", "/"));
