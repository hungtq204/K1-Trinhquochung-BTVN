// Input
const arrayWords = ['Hello world', 'JS is fun', 'Arrays and strings']; // 8

function countTotalWords(arr) {
  let total = 0;
  arr.forEach((element) => {
    total += element.trim().split(/\s+/).length;
    console.log(total);
  });
  return total;
}
// Test
console.log(
  countTotalWords(['Hello world', 'JS is fun', 'Arrays and strings'])
);
