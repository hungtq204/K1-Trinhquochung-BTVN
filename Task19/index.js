function printIsoscelesTriangle(n, character) {
  // Xử lý và in ra kết quả
  for (let i = 1; i <= n; i++) {
    const space = " ".repeat(n - i);
    const chars = character.repeat(2 * i - 1);
    console.log(space + chars);
  }
}

// Test
printIsoscelesTriangle(5, "*");
// Output:

//     *
//    ***
//   *****
//  *******
// *********
