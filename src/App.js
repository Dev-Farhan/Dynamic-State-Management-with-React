// import "./styles.css";
// import React, { useState } from "react";
// export default function App() {
//   const [rowCount, setRowCount] = useState(0);
//   const [colCount, setColCount] = useState(0);
//   const [grid, setGrid] = useState([]);
//   const [input,setInput]=useState("");

//   const handleRowCountChange = (e) => {
//     setRowCount(Number(e.target.value));
//   };

//   const handleColCountChange = (e) => {
//     setColCount(Number(e.target.value));
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newGrid = [];
//     for (let i = 0; i < rowCount; i++) {
//       const row = [];
//       for (let j = 0; j < colCount; j++) {
//         row.push(`${i}-${j}`);
//         console.log(i, j);
//       }
//       newGrid.push(row);
//     }
//     setGrid(newGrid);
//   };
//   const handleInput =()=>{

//   }
//   return (
//     <div className="App">
//       <form>
//         <h1>Dynamic State Management</h1>
//         <div className="form-control">
//           <label>Enter Row Count: </label>
//           <input
//             type="number"
//             value={rowCount}
//             onChange={handleRowCountChange}
//           />
//         </div>
//         <div className="form-control">
//           <label>Enter Column Count: </label>
//           <input
//             type="number"
//             value={colCount}
//             onChange={handleColCountChange}
//           />
//         </div>
//         <button
//           type="submit"
//           className="btn btn-primary mt-4"
//           onClick={handleSubmit}
//         >
//           Submit
//         </button>
//       </form>
//       <div className="container mt-5">
//         <h3>Enter Values</h3>
//         {grid.map((row, rowIndex) => (
//           <div key={rowIndex} className="row border border-primary mb-4">
//             {row.map((col, colIndex) => (
//               <div key={colIndex} className="col p-1">
//                 <input type='text' onChange={(e)=>setInput(e.target.value)} />
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//       <div className="mt-5">
//         <h3>Data Table</h3>
//         <table className='table table-bordered border-primary'>
//           <tbody>
//         {grid.map((row, rowIndex) => (
//           <tr key={rowIndex}>
//             {row.map((col, colIndex) => (
//               <td key={col}>
//                {input}
//               </td>
//             ))}
//           </tr>
//         ))}
//         </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [rowCount, setRowCount] = useState(0);
  const [colCount, setColCount] = useState(0);
  const [grid, setGrid] = useState([]);

  const handleRowCountChange = (e) => {
    setRowCount(Number(e.target.value));
  };

  const handleColCountChange = (e) => {
    setColCount(Number(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newGrid = [];
    for (let i = 0; i < rowCount; i++) {
      const row = [];
      for (let j = 0; j < colCount; j++) {
        row.push("");
      }
      newGrid.push(row);
    }
    setGrid(newGrid);
  };

  const handleInputChange = (e, rowIndex, colIndex) => {
    const newValue = e.target.value;
    const updatedGrid = [...grid];
    updatedGrid[rowIndex][colIndex] = newValue;
    setGrid(updatedGrid);
  };

  return (
    <div className="App">
      <form>
        <h1>Dynamic State Management</h1>
        <div className="form-control">
          <label>Enter Row Count: </label>
          <input
            type="number"
            value={rowCount}
            onChange={handleRowCountChange}
          />
        </div>
        <div className="form-control">
          <label>Enter Column Count: </label>
          <input
            type="number"
            value={colCount}
            onChange={handleColCountChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary mt-4"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
      {grid.length > 0 && (
        <div className="container mt-5">
          <h3>Enter Values</h3>
          <table className="table table-bordered border-primary">
            <tbody>
              {grid.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((col, colIndex) => (
                    <td key={colIndex}>
                      <input
                        type="text"
                        value={col}
                        onChange={(e) =>
                          handleInputChange(e, rowIndex, colIndex)
                        }
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {grid.length > 0 && (
        <div className="mt-5">
          <h3>Data Table</h3>
          <table className="table table-bordered border-primary">
            <tbody>
              {grid.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((col, colIndex) => (
                    <td key={colIndex}>{col}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
