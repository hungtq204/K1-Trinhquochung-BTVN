const users = [
  { fullname: "Nguyen Van A", age: 20, address: "LangSon" },
  { fullname: "Nguyen Van B", age: 22, address: "BacGiang" },
  { fullname: "Nguyen Van C", age: 21, address: "HaNoi" },
  { fullname: "Nguyen Van D", age: 22, address: "HaNoi" },
  { fullname: "Nguyen Van E", age: 32, address: "LangSon" },
];
function groupBy(arr, key) {
  return arr.reduce((result, item) => {
    const groupKey = item[key];
    //console.log(groupKey);
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(item);
    return result;
  }, {});
  // Xử lý và in ra kết quả
}

// Output:
const result1 = groupBy(users, "age"); // nhóm theo tuổi
console.log(result1);
const result2 = groupBy(users, "address");
console.log(result2);
