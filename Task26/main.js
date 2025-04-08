const fruits = [
  "apple",
  "banana",
  "kiwi",
  "kiwi",
  "banana",
  "orange",
  "apple",
  "kiwi",
];

function countElement(arr) {
  return arr.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});
  // Xử lý và in ra kết quả
}

const result = countElement(fruits);

console.log(result); // { apple: 2, banana: 2, kiwi: 3, orange: 1 }
