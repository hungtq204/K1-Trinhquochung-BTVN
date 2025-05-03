function getData(callback) {
  const data = [1, 2, 3, 4];
  setTimeout(() => {
    callback(data);
  }, 1000);
}

getData((data) => {
  console.log(data); // Sau 1 giây in ra: [1, 2, 3, 4]
});

function getData1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = [1, 2, 3, 4];
      resolve(data);
    }, 1000);
  });
}

getData1()
  .then((data) => console.log(data)) // Sau 1 giây in ra: [1, 2, 3, 4]
  .catch((error) => console.error(error));

function getData2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = [1, 2, 3, 4];
      resolve(data);
    }, 1000);
  });
}
async function test() {
  const result = await getData2();
  console.log(result);
  try {
  } catch (error) {
    console.log(error);
  }
}
test();
