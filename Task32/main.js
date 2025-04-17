// Input
const arrayString = ['JavaScript', 'java', 'Python', 'Ruby'];
let keyWord = 'ja';

function filterByKeyword(arrayString, keyWord) {
  // Logic bài toán và trả về kết quả
  return arrayString.filter((item) =>
    item.toLowerCase().includes(keyWord.toLowerCase())
  );
}
// Test

console.log(filterByKeyword(arrayString, keyWord)); //["JavaScript", "java"]
