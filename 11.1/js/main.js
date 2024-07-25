
function createPifagorTable() {
    const table = document.getElementById('pifagorTable');
            
            for (let i = 0; i <= 10; i++) {
                const row = document.createElement('tr');
                
                for (let j = 0; j <= 10; j++) {
                    if (i === 0 && j === 0) {
                        const cell = document.createElement('th');
                        row.appendChild(cell);
                    } else if (i === 0) {
                        const cell = document.createElement('th');
                        cell.textContent = j;
                        row.appendChild(cell);
                    } else if (j === 0) {
                        const cell = document.createElement('th');
                        cell.textContent = i;
                        row.appendChild(cell);
                    } else {
                        const cell = document.createElement('td');
                        cell.textContent = i * j;
                        row.appendChild(cell);
                    }
                }
                
                table.appendChild(row);
            }
    }
        
createPifagorTable();