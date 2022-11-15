import React, { useRef, useEffect, useState } from "react";
import jspreadsheet from "jspreadsheet";
import "/node_modules/jspreadsheet/dist/jspreadsheet.css";
import "/node_modules/jsuites/dist/jsuites.css";
import "./App.css";
import AgGrid from "./AgGrid";
import StackBarChart from "./StackBarChart";

export default function App() {
  const jssRef = useRef(null);
  const worksheetTwo = useRef(null);
  const [table, setTable] = useState();
  const [table2, setTable2] = useState();
  const [data2, setdata2] = useState({
    data: [
      ["Apple", 100, "=(B1*Sheet2!B1)"],
      ["Orange", 40, "=(B2*Sheet2!B2)"],
      ["Grape", "30", "=(B3*Sheet2!B3)"],
      ["", "Total Amount", "=SUM(C1:C3)"],
      ["", "Total Kilos", "=SUM(Sheet2!B4)"],
    ],
    columns: [
      { type: "text", title: "Items" },
      { type: "text", title: "Price", width: "150px" },
      { type: "text", title: "Final Amount", width: "150px" },
    ],
    minDimensions: [5, 5],
    worksheetName: "Sheet1",

    style: {
      B5: "background-color: orange;font-weight:bold",
      B4: "background-color: orange;font-weight:bold",
    },
  });
  const license =
    "YjcxYmZhMTFjYjA2MWQ3ZDNhNmU3NjA5NjkwOGZmOWZhNzQwYmUzNzUxZmNmMTI2ZjhkZjJmMzViYmNjNDM5NzY4ZWNjMGMxNjdkMjQ3MGJiOWU0YWRmNTFiMTNmYzIxYmNmMDgxYTIwMTFiOGRmNDA3Y2YzNWIyYzE5NzU1Y2MsZXlKdVlXMWxJam9pYjNKcFpTNXJZWEpsYkNJc0ltUmhkR1VpT2pFMk56QXpOekV5TURBc0ltUnZiV0ZwYmlJNld5SWlMQ0pzYjJOaGJHaHZjM1FpWFN3aWNHeGhiaUk2TUN3aWMyTnZjR1VpT2xzaWRqY2lMQ0oyT0NJc0luWTVJbDE5";
  // eslint-disable-next-line react-hooks/exhaustive-deps
  let sheetTow = {
    data: [
      ["Apple", 1],
      ["Orange", 2],
      ["Grape", "3"],
      ["Total", "=SUM(b1,b2,b3)"],
    ],
    filters: true,
    tabs: true,
    columns: [
      { type: "text", title: "Items" },
      { type: "text", title: "Quantity" },
    ],
    minDimensions: [5, 5],
    worksheetName: "Sheet2",

    style: {
      A1: "background-color: #42a5f5; color: #fffde7",
      A2: "background-color: #42a5f5; color: #fffde7",
      A3: "background-color: #42a5f5; color: #fffde7",
      A4: "background-color: #42a5f5; color: #fafafa",
      B4: "border-left: 1px solid black; border-right: 1px solid black; border-top: 1px solid black; border-bottom: 1px solid black",
    },
  };

  useEffect(() => {
    // Create only once

    // if (!worksheetTwo.current.jspreadsheet) {
    //   setTable(
    //     jspreadsheet(worksheetTwo.current, {
    //       worksheets: [{ ...sheetTow }],
    //       license: license,
    //       toolbar: true,
    //     })
    //   );
    // }

    // if (!jssRef.current.jspreadsheet) {
    //   setTable2(
    //     jspreadsheet(jssRef.current, {
    //       worksheets: [data2],
    //       tabs: true,
    //       license: license,
    //     })
    //   );
    // }
    // console.log( jssRef.getCell(),'ok')
  }, [data2, sheetTow]);

  let download = function (e) {
    // The method should receive the spreadsheet DOM element
    // jspreadsheet.render(jssRef.current)
    //  console.log(table,table[0].getStyle())
    //  console.log(table[0].getJson())
    //  console.log(table[0].getWorksheetName())

    //  data.data= table[0].getJson();
    //  data.worksheetName =table[0].getWorksheetName()+"dup";
    //  data.style = table[0].getStyle();
    // //  setTable2(data)
    //  console.log(data);

    console.log(table[0]);

    //  table2[0]?.setData(table[0].getJson())
    //  table2[0]?.setStyle(table[0].getStyle())

    //  console.log(table[0].getStyle())
    //table[0].insertColumn()
    // table["0"].getValue((el)=> {console.log(el)})
    //  table[0].getValue((val)=>{
    //   console.log(val)
    //  })
  };
  useEffect(() => {}, [setTable2, setdata2]);
  return (
    <>
      {/* <div className="sheet-container">
        <div ref={jssRef} />
        <div ref={worksheetTwo} />
        <button
          onClick={() => {
            download(jssRef.current);
          }}
        >
          Get Data
        </button>
      </div> */}
      <div className="aggrid">
        <AgGrid />
        <StackBarChart />
      </div>
    </>
  );
}
