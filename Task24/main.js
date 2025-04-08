const number = [4, 2, 7, 6, 5, 8, 2, 1];

function sortArrNumber(arr) {
  const coppy = [...arr];
  for (let i = 0; i < coppy.length - 1; i++) {
    let minIdex = i;
    for (let j = i + 1; j < coppy.length; j++) {
      if (coppy[j] < coppy[minIdex]) {
        minIdex = j;
      }
    }
    let temp = coppy[i];
    coppy[i] = coppy[minIdex];
    coppy[minIdex] = temp;
  }
  return coppy;
  // Xử lý và in ra kết quả
}

const result = sortArrNumber(number);
console.log(result); // [1,2,2,4,5,6,7,8]
