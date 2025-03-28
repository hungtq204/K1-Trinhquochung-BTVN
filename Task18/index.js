function printMultiplicationTable() {
  document.writeln('<div style="display: flex; gap: 20px;">');
  for (let i = 1; i <= 10; i++) {
    document.writeln("<div>");
    for (let j = 1; j <= 10; j++) {
      document.writeln(`${i} x ${j} = ${i * j}<br>`);
    }
    document.writeln("</div>");
  }
  document.writeln("</div>");
}
printMultiplicationTable();
