const students = [
  { id: 1, name: 'Nguyễn Văn A', age: 20, city: 'Hà Nội' },
  { id: 2, name: 'Trần Thị B', age: 19, city: 'TP.HCM' },
  { id: 3, name: 'Lê Văn C', age: 21, city: 'Đà Nẵng' },
];

let html = /*html */ `
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Age</th>
      <th>City</th>
    </tr>
  </thead>
  <tbody>
`;

students.forEach((student) => {
  html += /*html */ `
    <tr>
      <td>${student.id}</td>
      <td>${student.name}</td>
      <td>${student.age}</td>
      <td>${student.city}</td>
    </tr>
  `;
});

html += '</tbody>';

const table = document.getElementById('dataTable');
table.innerHTML = html;

const allCells = table.querySelectorAll('th, td');
allCells.forEach((a) => {
  a.style.border = '1px solid blue';
  a.style.backgroundColor = '#f0f0f0';
});
