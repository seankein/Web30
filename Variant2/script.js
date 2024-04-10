window.onload = function() {
    const table = document.getElementById('myTable');
    const headerRow = table.getElementsByTagName('thead')[0].getElementsByTagName('tr')[0];
    const bodyRows = table.getElementsByTagName('tbody')[0];
  
    // ヘッダー行の生成
    for (let i = 0; i <= 12; i++) {
      const th = document.createElement('th');
      th.textContent = i === 0 ? '' : i;
      headerRow.appendChild(th);
    }
  
    // 表の行の生成
    for (let i = 1; i <= 12; i++) {
      const row = document.createElement('tr');
      for (let j = 0; j <= 12; j++) {
        const cell = document.createElement('td');
        if (j === 0) {
          cell.textContent = i;
        } else {
          cell.textContent = i * j;
        }
        row.appendChild(cell);
      }
      bodyRows.appendChild(row);
    }
  };