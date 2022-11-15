import React, { PureComponent, useEffect } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
export default function StackBarChart({ data }) {
  useEffect(()=>{},[data])
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
          <Tooltip />
          <Legend />
          <Bar dataKey="interest" barSize={25}  stackId="a" fill="#fab1a0" />
          <Bar dataKey="payment" barSize={25} stackId="a" fill="#e17055" />
        </BarChart>
      </ResponsiveContainer>
 
  )
}
