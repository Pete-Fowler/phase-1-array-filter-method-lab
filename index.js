const findMatching = (arr, str) => {
  return arr.filter(name => name.toLowerCase() === str.toLowerCase());
}

// const fuzzyMatch = (arr, str) => {
//   return arr.filter(name => {
//     const index = name.toLowerCase().indexOf(str.toLowerCase());
//     return index === 0;
//   });
// }

const fuzzyMatch = (arr, str) => {
  return arr.filter(name => name.startsWith(str));
}

const matchName = (drivers, string) => {
  return drivers.filter(({ name }) => name === string);
}