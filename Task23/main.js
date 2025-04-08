const arrNumber = [1, 2, 3, 4, 5, 5, null, undefined, 6];

function reverseArr(arr) {
  const filtered = arr.filter((item) => Number.isInteger(item));
  //console.log(filtered);
  const revered = [];
  for (let i = filtered.length - 1; i >= 0; i--) {
    // console.log(filtered[i]);
    revered.push(filtered[i]);
  }
  return revered;
  // Xử lý và in ra kết quả
}
const result = reverseArr(arrNumber);
console.log(result); // [6,5,4,3,2,1]
