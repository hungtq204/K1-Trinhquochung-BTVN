let weigh = parseFloat(prompt("Mời nhập cân năng:"));
let heigh = parseFloat(prompt("Mời nhập chiều cao:"));
function calcBMI(w, h) {
  let BMI = w / h ** 2;
  if (BMI < 18.5) {
    console.log("Thiếu cân");
  } else if (BMI >= 18 && BMI < 23) {
    console.log("Bình thường");
  } else if (BMI >= 23 && BMI < 25) {
    console.log("Thừa cân");
  } else {
    console.log("Béo phì");
  }
}
calcBMI(weigh, heigh);
