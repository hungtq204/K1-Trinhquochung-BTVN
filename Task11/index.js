/**
 *
 * * Thực hiện viết hàm isTriangle(a, b, c)
 * * để kiểm tra 3 số a, b, c
 * * có thể tạo thành 1 tam giác hợp lệ hay không.
 * * Nếu có trả về true, ngược lại trả về false.
 * ! Input : a,b,c là ba cạnh của tam giác
 * ! Output : True/false
 * ! Logic : Trong một tam giác tổng 2 cạnh bất kì luôn lớn hơn cạnh còn lại
 */
function isTriangle(a, b, c) {
  if (a <= 0 || b <= 0 || b <= 0) {
    return false;
  } else {
    return a + b > c && a + c > b && b + c > a;
  }
}
console.log(isTriangle(9, 3, 7));
