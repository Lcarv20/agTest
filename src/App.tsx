import { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { ColDef } from 'ag-grid-community';
function App() {
  const [rowData] = useState([
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxster", price: 72000 }
  ]);

  const [columnDefs] = useState<ColDef[]>([
    { field: 'make', editable: true },
    { field: 'model' },
    { field: 'price' }
  ]);

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        editType={"fullRow"}
        rowSelection="multiple"
        onRowValueChanged={(params) => {
          console.log("row changed", params)
          console.log("Row state:", rowData)
        }}
        onCellValueChanged={(params) => {
          console.log("cell changed", params)
        }}


      />

    </div>
  );
}

export default App
