import * as XLSX from 'xlsx'; // Importa la librería xlsx

// Ruta al archivo Excel
const excelPath = '../public/CalidadConti.xlsx';

// Contenedor donde se mostrará la tabla
const tablaContainer = document.getElementById('tabla-container');

// Función para leer el archivo Excel y crear la tabla
async function cargarExcel() {
  try {
    const response = await fetch(excelPath);
    const data = await response.arrayBuffer();
    
    // Leer el archivo Excel con XLSX
    const workbook = XLSX.read(data, { type: 'array' });
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];

    // Convertir la hoja a JSON (leer solo la primera columna)
    const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 });

    // Crear la tabla
    const table = document.createElement('table');
    table.classList.add('tabla-bardcore');

    // Crear encabezado de la tabla
    const thead = document.createElement('thead');
    thead.innerHTML = `
      <tr>
        <th>Bardcore Propuesto</th>
        <th>Condición</th>
      </tr>
    `;
    table.appendChild(thead);

    // Crear cuerpo de la tabla con los datos de la primera columna (columna A)
    const tbody = document.createElement('tbody');
    rows.forEach((row) => {
      if (row[0]) {  // Si hay un valor en la primera columna
        const tr = document.createElement('tr');
        const tdBardcore = document.createElement('td');
        tdBardcore.textContent = row[0];  // Primer valor de la fila es el código Bardcore

        const tdCondicion = document.createElement('td');
        tdCondicion.classList.add('condicion');
        tdCondicion.textContent = '';  // Vacío inicialmente

        tr.appendChild(tdBardcore);
        tr.appendChild(tdCondicion);
        tbody.appendChild(tr);
      }
    });

    // Añadir el cuerpo de la tabla a la tabla
    table.appendChild(tbody);
    tablaContainer.appendChild(table);
  } catch (error) {
    console.error("Error al cargar el archivo Excel:", error);
  }
}

// Llamar a la función para cargar el archivo Excel y mostrar los datos
cargarExcel();
