function getUser(userId, callback) {
  setTimeout(() => {
    callback({ id: userId, name: 'John', age: 30 });
  }, 1000);
}

function getPurchases(userId, callback) {
  setTimeout(() => {
    callback([
      { id: 1, userId: userId, product: 'Laptop', price: 1000 },
      { id: 2, userId: userId, product: 'Phone', price: 2000 },
    ]);
  }, 1000);
}

function getProductDetails(productId, productName, productPrice, callback) {
  setTimeout(() => {
    callback({ id: productId, name: productName, price: productPrice });
  }, 1000);
}
getUser(1, (user) => {
  console.log('User :', user);
  getPurchases(user.id, (purchases) => {
    console.log('Purchases:', purchases);
    let total = 0;
    let count = 0;
    purchases.forEach((item) => {
      getProductDetails(item.id, item.product, item.price, (productDetail) => {
        console.log('ProductDetail', productDetail);
        total += productDetail.price;
        count++;
        if (count === purchases.length) {
          console.log('Tổng giá sản phẩm trên là:', total);
        }
      });
    });
  });
});
