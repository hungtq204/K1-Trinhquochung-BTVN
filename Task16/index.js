function taxiBill(km) {
  // Kiểm tra nếu km không phải là số hoặc nhỏ hơn hoặc bằng 0
  if (typeof km !== "number" || km <= 0) {
    console.log("Số km không hợp lệ");
    return;
  }

  let cost = 0;
  if (km <= 1) {
    cost = 10000;
  } else if (km > 1 && km <= 30) {
    cost = 10000 + (km - 1) * 8000;
  } else {
    cost = 10000 + 29 * 8000 + (km - 30) * 7000;
  }

  console.log(`Số tiền cần trả: ${cost}đ`);
}

// Test cases
taxiBill(0.1); // Output: Số tiền cần trả: 10000đ
taxiBill(1); // Output: Số tiền cần trả: 10000đ
taxiBill(10); // Output: Số tiền cần trả: 82000đ
taxiBill(-5); // Output: Số km không hợp lệ
taxiBill("abc"); // Output: Số km không hợp lệ
