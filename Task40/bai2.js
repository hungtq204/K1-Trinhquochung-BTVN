function getUserPromise(userId, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const callback = { id: userId, name: 'John', age: 30 };
      resolve(callback);
    }, 1000);
  });
}

function getPurchasesPromise(userId, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const callback = [
        { id: 1, userId: userId, product: 'Laptop', price: 1000 },
        { id: 2, userId: userId, product: 'Phone', price: 2000 },
      ];
      resolve(callback);
    }, 1000);
  });
}

function getProductDetailsPromise(productId, productName, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const callback = { id: productId, name: productName, price: 1000 };
      resolve(callback);
    }, 1000);
  });
}

getUserPromise(1)
  .then((user) => {
    console.log('User:', user);
    return getPurchasesPromise(user.id);
  })
  .then((purchases) => {
    console.log('Purchases:', purchases);

    const detailPromises = purchases.map((item) =>
      getProductDetailsPromise(item.id, item.product, item.price)
    );

    return Promise.all(detailPromises);
  })
  .then((details) => {
    console.log('Product Details:', details);
    const total = details.reduce((sum, item) => sum + item.price, 0);
    console.log('Tổng giá trị sản phẩm:', total);
  })
  .catch((err) => console.error(err));
