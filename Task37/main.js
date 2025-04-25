let count = 3;
function addItem() {
  const list = document.getElementById('list');
  const newItem = document.createElement('div');
  newItem.className = 'item';
  newItem.textContent = `Phần tử ${count++}`;
  list.appendChild(newItem);
}
function removeItem() {
  const list = document.getElementById('list');
  const lastItem = list.lastElementChild;
  if (lastItem) {
    list.removeChild(lastItem);
    count--;
  } else {
    alert('Không còn phần tử nào');
  }
}
