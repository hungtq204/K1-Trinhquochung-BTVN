//Input:
function taxSalary(salary) {
  // Xử lý và in ra kết quả
  if (typeof salary !== "number" || salary < 0) {
    console.log("Thu nhập không hợp lệ");
    return;
  }

  let thue = 0;
  if (salary > 80000000) {
    thue = thue + (salary - 80000000) * 0.3;
    salary = 80000000;
  }
  if (salary > 50000000) {
    thue = thue + (salary - 50000000) * 0.2;
    salary = 50000000;
  }
  if (salary > 25000000) {
    thue = thue + (salary - 25000000) * 0.1;
    salary = 25000000;
  }
  if (salary > 11000000) {
    thue = thue + (salary - 11000000) * 0.05;
    salary = 11000000;
  }
  if (salary < 11000000) {
    thue = thue + (salary - 11000000) * 0;
    salary = 0;
  }
  document.writeln("<br>");
  document.writeln(thue.toLocaleString("vi-VN"));
}

// Output:
taxSalary(10000000); // 0
taxSalary(15000000); // 200.000
taxSalary(30000000); // 1.200.000
taxSalary(100000000); // 17.200.000
taxSalary(-10000000); // Thu nhập không hợp lệ
taxSalary("abc"); // Thu nhập không hợp lệ
