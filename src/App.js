import React,{useEffect, useState} from 'react'
import {Container,Row,Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AgGrid from './AgGrid';
import StackBarChart from './StackBarChart';
import LoanInfo from './LoanInfo';
import './App.css'

export default function App() {
  const [colDef,setColDef] = useState([
    { field: "principal", filter: false },
  //   {headerName:"Due Payment & Interest",
  // children:[
  //  // {field:"payment",headerName:"Due"},
  // ]},
  { field: "interest" },
    { field: "payment", filter: true,headerName:"Payment" },
    
   
  ])
  // const [data,setData] = useState([
  //   {"principal":1000,loantenure:12,interest:10,actions:"hh"},
  // ])
  const [chartDatas,setChartDatas] = useState([]);
  const [data,setData] = useState([]);
  useEffect(()=>{
     console.log(data,'Daata')
  },[data])
  return (
    <div className='appContainer'>
     
      <Container >
        <Row>
        <div className='load_info'>
                <LoanInfo userInput={(data)=>setData(data)}/>
             </div>
          <Col lg={4}>
            
             <AgGrid colDef={colDef} data={data} chartData={(data)=> {setChartDatas(data)}}/>
          </Col>
          <Col lg={8}>
          <StackBarChart data={chartDatas}/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
