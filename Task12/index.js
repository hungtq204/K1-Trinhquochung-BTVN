// Input: Một số nguyên dương m>2
function printSquareNumber(n) {
  // Xử lý và in ra kết quả
  //Kiểm tra n nếu n <2 thì không có số chính phương nào
  // Số chính phương là số có dạng x**2
  if (n < 2) {
    console.log("Không có số chính phương nào");
    return;
  }
  for (let x = 2; x * x < n; x++) {
    console.log(x * x);
  }
}

// Output:
printSquareNumber(10); // 4 9);
printSquareNumber(20); // 4 9 16
