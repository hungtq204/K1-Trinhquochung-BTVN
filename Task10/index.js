function swapNumber(a, b) {
  a += b;
  b = a - b;
  a -= b;
  return [a, b];
}
//console.log(swapNumber(5, 8));
function sortNumber(a, b, c) {
  // Xử lý và in ra kết quả
  if (a > b) [a, b] = swapNumber(a, b);
  if (a > c) [a, c] = swapNumber(a, c);
  if (b > c) [b, c] = swapNumber(b, c);

  console.log(a, b, c);
}

sortNumber(3, 2, 1); // 1 2 3
// Output:
