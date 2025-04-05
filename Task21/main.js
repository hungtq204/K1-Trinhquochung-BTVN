/*
 * Viết hàm nhận vào một mảng và làm sạch các falsy values có trong mảng
 */
function cleanFalsyValues(arr) {
  return arr.filter(Boolean);
  // Xử lý và in ra kết quả
}

// Test

const mangDaLamSach = cleanFalsyValues([
  1,
  0,
  "",
  null,
  "hello",
  undefined,
  NaN,
  2,
  3,
]); // Output: [1, "hello", 2, 3]
console.log(mangDaLamSach);
/*
 * Viết hàm lọc lấy các số chẵn của một mảng
 */
function filterEvenNumbers(arr) {
  // Xử lý và in ra kết quả
  return arr.filter(function (number) {
    return number % 2 === 0;
  });
}

// Test

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // Output: [2, 4, 6]
console.log(filterEvenNumbers([1, 3, 5, 7])); // Output: []
console.log(filterEvenNumbers([])); // Output: []
console.log(filterEvenNumbers([-2, -1, 0, 1, 2])); // Output: [-2, 0, 2]

/*
 * Viết hàm lọc lấy các chuỗi có độ dài lớn hơn 5 của mảng các chuỗi
 */
function filterLongStrings(arr) {
  return arr.filter(function (str) {
    return str.length > 5;
  });
}

// Test
console.log(filterLongStrings(["hello", "world", "javascript", "nodejs"])); // Output: ["javascript", "nodejs"]
console.log(filterLongStrings(["hi", "hello world", "a b c", "goodbye!!"])); // Output: ["hello world", "goodbye!!"]
console.log(filterLongStrings(["hi", "bye", "yes"])); // Output: []
/*
 * Cho trước mảng chứa các số nguyên, viết hàm tìm:
 * Tìm số lớn nhất trong mảng và vị trí của nó (Nếu có 2 số bằng nhau, lấy số đầu tiên tìm được).
 *Tìm số nhỏ nhất trong mảng và vị trí của nó (Nếu có 2 số bằng nhau, lấy số đầu tiên tìm được).
 *Tính trung bình cộng các số nguyên tố trong mảng, nếu mảng không có số nguyên tố nào, trả về null.
 */

function findMinMaxAverage(arr) {
  let max = arr[0];
  let maxIndex = 0;
  let min = arr[0];
  let minIndex = 0;
  let primeSum = 0;
  let primeCount = 0;

  // Hàm kiểm tra số nguyên tố
  function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  // Duyệt mảng để xử lý
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      maxIndex = i;
    }
    if (arr[i] < min) {
      min = arr[i];
      minIndex = i;
    }

    if (isPrime(arr[i])) {
      primeSum += arr[i];
      primeCount++;
    }
  }
  const primeAverage =
    primeCount > 0 ? Number((primeSum / primeCount).toFixed(2)) : null;
  return {
    max,
    maxIndex,
    min,
    minIndex,
    primeAverage,
  };
}

//Test;
console.log(findMinMaxAverage([3, 1, 4, 1, 5, 9, 2, 6])); // Output: {max: 9, maxIndex: 5, min: 1, minIndex: 1, primeAverage: 3.33 }
console.log(findMinMaxAverage([5, 5, 2, 2, 1])); // Output: {max: 5, maxIndex: 0, min: 1, minIndex: 4, primeAverage: 3.5 }
console.log(findMinMaxAverage([-3, 7, -8, 11, 0])); // Output: {max: 11, maxIndex: 3, min: -8, minIndex: 2, primeAverage: 9 }

function insertNumber(arr, num) {
  const validNumbers = arr
    .filter((val) => typeof val === "number" && !isNaN(val))
    .sort((a, b) => a - b);

  if (typeof num !== "number" || isNaN(num)) {
    return validNumbers;
  }

  let insertIndex = 0;
  while (insertIndex < validNumbers.length && validNumbers[insertIndex] < num) {
    insertIndex++;
  }

  validNumbers.splice(insertIndex, 0, num);

  return validNumbers;
}

// Test
console.log(insertNumber([1, 3, 5, 7, 9], 6)); // Output: [1, 3, 5, 6, 7, 9]
console.log(insertNumber([3, "hello", 1, NaN, 4, null], 2)); // Output: [1, 2, 3, 4]
console.log(insertNumber([], 5)); // Output: [5]
console.log(insertNumber([-1, 10, -5, "abc"], -3)); // Output: [-5, -3, -1, 10]
console.log(insertNumber([5, 2, 8], NaN)); // Output: [2, 5, 8]
