window.onload = function() {
    const table = document.getElementById('myTable');
    const headerRow = document.createElement('tr');
    table.getElementsByTagName('thead')[0].appendChild(headerRow);
    const bodyRows = table.getElementsByTagName('tbody')[0];
  
    // ヘッダー行の先頭に空のセルを追加
    const emptyTh = document.createElement('th');
    emptyTh.textContent = '';
    headerRow.appendChild(emptyTh);
  
    // ヘッダー行の生成
    for (let i = 1; i <= 12; i++) {
      const th = document.createElement('th');
      th.textContent = i;
      headerRow.appendChild(th);
    }
  
    // 表の行の生成
    for (let i = 1; i <= 12; i++) {
      const row = document.createElement('tr');
      const emptyTd = document.createElement('td'); // 先頭に空のセルを追加
      emptyTd.textContent = i;
      row.appendChild(emptyTd);
      for (let j = 1; j <= 12; j++) {
        const cell = document.createElement('td');
        cell.textContent = i * j;
        row.appendChild(cell);
      }
      bodyRows.appendChild(row);
    }
  };