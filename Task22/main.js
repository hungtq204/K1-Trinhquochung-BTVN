const arrayNumber = [1, 2, 3, 4, 3, 2, 1];
function checkSymmetricalArr(arr) {
  if (!Array.isArray(arr)) {
    return "Dữ liệu không hợp lệ";
  }
  if (arr.length === 1) {
    return "Mảng có 1 phần tử không kiểm tra được";
  }
  for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
      return false;
    }
    // console.log([arr.length - 1 - i]);
  }
  return true;
  // Xử lý logic
}
const result = checkSymmetricalArr(arrayNumber);
console.log(result); //true
