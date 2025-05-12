let allProducts = [];
let currentPage = 1;
const itemsPerPage = 10;

async function fetchProducts(url = 'https://dummyjson.com/products') {
  const res = await fetch(url);
  const data = await res.json();
  allProducts = data.products;
  currentPage = 1;
  renderProducts();
}

function renderProducts() {
  const container = document.getElementById('productList');
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginated = allProducts.slice(start, end);

  container.innerHTML = paginated
    .map(
      (p) => `
    <div class="bg-white border rounded shadow-sm p-3 flex flex-col">
      <img src="${p.thumbnail}" class="h-36 object-cover rounded mb-2">
      <h3 class="font-semibold text-sm">${p.title}</h3>
      <p class="text-xs text-gray-500 mb-1">${p.description.slice(0, 50)}...</p>
      <p class="text-sm font-medium mb-2">Giá: $${p.price}</p>
      <button onclick="showDetail(${
        p.id
      })" class="mt-auto bg-blue-500 text-white text-sm px-3 py-1 rounded hover:bg-blue-600">Xem chi tiết</button>
    </div>
  `
    )
    .join('');

  document.getElementById('productCount').innerText = ``;
  document.getElementById(
    'pageInfo'
  ).innerText = `Trang ${currentPage} / ${Math.ceil(
    allProducts.length / itemsPerPage
  )}`;
}

function searchProduct() {
  const query = document.getElementById('searchInput').value.trim();
  if (!query) return fetchProducts();
  fetch(`https://dummyjson.com/products/search?q=${query}`)
    .then((res) => res.json())
    .then((data) => {
      allProducts = data.products;
      currentPage = 1;
      renderProducts();
    });
}

function sortProducts(order) {
  allProducts.sort((a, b) =>
    order === 'asc' ? a.price - b.price : b.price - a.price
  );
  currentPage = 1;
  renderProducts();
}

function showDetail(id) {
  const product = allProducts.find((p) => p.id === id);
  if (!product) return;
  document.getElementById('detailTitle').innerText = product.title;
  document.getElementById('detailImage').src = product.thumbnail;
  document.getElementById('detailDescription').innerText = product.description;
  document.getElementById('detailPrice').innerText = product.price;
  document.getElementById('detailModal').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('detailModal').classList.add('hidden');
}

function nextPage() {
  const totalPages = Math.ceil(allProducts.length / itemsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    renderProducts();
  }
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    renderProducts();
  }
}

fetchProducts();
