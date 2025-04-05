/**
Hàm printChristmasTree(n, character) sẽ in ra cây thông noel với chiều cao n theo yêu cầu sau:
Chỉ chấp nhận n là số nguyên dương nhỏ hơn 100, và character là một ký tự.
Cây thông noel được in ra bằng ký tự character truyền vào.
Cây thông noel được in ra theo dạng tam giác cân.
Cây thông noel được in ra theo chiều cao n nếu chỉ tính tán cây, và cao n+1 nếu tính cả phần gốc.
Cây thông noel được in ra theo độ rộng 2n - 1.
 * 
 */

function printChristmasTree(n, character) {
  if (
    n <= 0 ||
    n >= 100 ||
    typeof character !== "string" ||
    character.length !== 1
  ) {
    console.log("Đầu vào không hợp lệ.");
    return;
  }

  for (let i = 0; i < n; i++) {
    let Khoangtrang = "";
    for (let j = 0; j < n - i - 1; j++) {
      Khoangtrang += " ";
    }
    for (let k = 0; k < 2 * i + 1; k++) {
      Khoangtrang += character;
    }
    console.log(Khoangtrang);
  }
  let goc = "";
  for (let i = 0; i < n - 1; i++) {
    goc += " ";
  }
  goc += character;
  console.log(goc);
}
printChristmasTree(5, "*");

// Output:

//     *
//    ***
//   *****
//  *******
// *********
//     *

printChristmasTree(4, "o");

// Output:

//    o
//   ooo
//  ooooo
// ooooooo
//    o
