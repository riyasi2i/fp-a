import React, { useState, useEffect, useMemo } from "react";
import { AgGridReact } from "ag-grid-react"; // the AG Grid React Component

import "ag-grid-community/styles/ag-grid.css"; // Core grid CSS, always needed
import "ag-grid-community/styles/ag-theme-alpine.css"; // Optional theme CSS

export default function AgGrid({colDef,data,chartData}) {
    // const modelRender =(data) =>{
    //     switch (data.value) {
    //         case "Mondeo":
    //            return( <div style={{"background":"red"}}>
    //            <span style={{"color":"#fff","textAlign":'center',"display":'block'}}>{data.value} </span>
    //          </div>)
    //           case "Celica":
    //             return( <div style={{"background":"green"}}>
    //             <span style={{"color":"#fff","textAlign":'center',"display":'block'}}>{data.value} </span>
    //           </div>)
        
    //         default:
    //             return( <div style={{"background":"blue"}}>
    //            <span style={{"color":"#fff","textAlign":'center',"display":'block'}}>{data.value} </span>
    //          </div>)
    //     }
    // }
  const [tempData,setTempData] = useState([]);
  const [gridApi,setGridApi] = useState(null);
  const defaultColDefs = useMemo(()=>({
     filter:true,
     sortable:true,
     width:135,
     editable:true,
   
  }),[])
  const fromatGraphData  = (value) =>{
    let data=[];
    value?.map((d,i) => 
      data.push({...d.data,name:"Month "+i})
     )
  return chartData(data)
  }
  const gridOptions = {
    rowData: tempData,
    columnDefs: colDef,
    rowSelection: 'single',
    enableCharts:true,
    // EVENTS
    // Add event handlers
    
    onRowClicked: event =>{
      fromatGraphData(event.columnApi.columnModel.rowModel.rowsToDisplay) 
    } ,
    onColumnResized: event => console.log('A column was resized'),
    onGridReady: event => {},
    getRowHeight: (params) => 35,
    
    
}


  useEffect(()=>{
  
    const loanMonth =data?.month;
    const loanAmount = data?.amount;
    const loanInterest = data?.interest;
    const monthlyInstalment = (loanAmount/loanMonth).toFixed(0);
   
    let dataTemp = []
    for(let i=0;i < loanMonth;i++){
      let monthPay = (parseInt(loanAmount)-(parseInt(loanAmount) / parseInt(loanMonth)*i))
      const interest = (parseInt(monthPay) * (parseInt(loanInterest) * 0.01)) / parseInt(loanMonth);
    let payment = (parseInt(loanAmount) / parseInt(loanMonth) + interest).toFixed(1);
      let temp ={
      "principal":monthPay.toFixed(1),
      "interest":interest.toFixed(1),
      "payment":payment,
      "name":"Month "+ (i+1)
     // payment:((parseInt(loanAmount) / parseInt(loanMonth))).toFixed(1)
    }
      dataTemp.push(temp)
    }
    setTempData(dataTemp)
    
    chartData(dataTemp)
  
  },[data])
  
  

  return (
    <div className="ag-theme-alpine" style={{ width: "100%", height: 500 }}>
            <AgGridReact
             gridOptions={gridOptions}
            columnDefs={colDef}
            defaultColDef={defaultColDefs}
            rowData={tempData}
       
      />
    </div>
  );
}
