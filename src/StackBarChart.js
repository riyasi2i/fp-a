import React, { PureComponent, useEffect } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
export default function StackBarChart({ data }) {
  useEffect(()=>{},[data])
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${label}`}</p>
          <p className="intro m-0">Interest to Pay :  {`${payload[0].value}`}</p>
          <p className="intro m-0">Principal to Pay :  {`${((payload[1].value)-(payload[0].value)).toFixed(2)}`}</p>
          <p className="intro m-0">Total Amount :  {`${(payload[1].value)}`}</p>
         
        </div>
      );
    }
  
    return null;
  };
  return (
 
      <ResponsiveContainer width="100%" height="100%" className={"bar-chart"}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >  
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar dataKey="interest" barSize={25}  stackId="a" fill="#1765fd" />
          <Bar dataKey="payment" barSize={25} stackId="a" fill="#4fcb8d" />
        </BarChart>
      </ResponsiveContainer>
 
  )
}
