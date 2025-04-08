const fruits = [
  "apple",
  "banana",
  "kiwi",
  "kiwi",
  "banana",
  "orange",
  "apple",
  "kiwi",
];

function removeDuplicate(arr) {
  return arr.reduce((acc, curr) => {
    const isCurrNaN = typeof curr === "number" && Number.isNaN(curr);
    const hasNaN = acc.some(
      (item) => typeof item === "number" && Number.isNaN(item)
    );

    if (
      (isCurrNaN && hasNaN) ||
      (curr === null && acc.includes(null)) ||
      (curr === undefined && acc.includes(undefined))
    ) {
      return acc;
    }

    if (!acc.includes(curr)) {
      acc.push(curr);
    }

    return acc;
  }, []);
}

const result = removeDuplicate(fruits);

console.log(result); // ["apple", "banana", "kiwi", "orange"]
