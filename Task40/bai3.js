function getUserAsync(userId, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const callback = { id: userId, name: 'John', age: 30 };
      resolve(callback);
    }, 1000);
  });
}

function getPurchasesAsync(userId, callback) {
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

function getProductDetailsAsync(productId, productName, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const callback = { id: productId, name: productName, price: 1000 };
      resolve(callback);
    }, 1000);
  });
}

async function getDataAsync() {
  try {
    const user = await getUserAsync(1);
    console.log('User:', user);

    const purchases = await getPurchasesAsync(user.id);
    console.log('getPurchases:', purchases);

    const details = await Promise.all(
      purchases.map((item) =>
        getProductDetailsAsync(item.id, item.product, item.price)
      )
    );

    console.log('ProductDetails:', details);

    const total = details.reduce((sum, item) => sum + item.price, 0);
    console.log('Tổng giá trị sản phẩm:', total);
  } catch (error) {
    console.error(error);
  }
}

getDataAsync();
