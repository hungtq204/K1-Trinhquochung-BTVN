const arrayString = ['name:John', 'age:30', 'city:NY'];
function convertArrayToObject(array) {
  const result = {};
  array.forEach((element) => {
    const [key, value] = element.split(':');
    console.log(element);
    result[key] = value;
  });

  return result;
}

console.log(convertArrayToObject(arrayString));
