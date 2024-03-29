import './chart.scss';
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Label, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Tue',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Wed',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Thu',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Fri',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Sat',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Sun',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];


const Chart = () => {
  return (
    <div className="chart">
      <div className="title">Weekly Gate Records</div>
        <ResponsiveContainer width="100%" aspect={2 / 1}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" className='grid'/>
          <XAxis dataKey="name" stroke='gray' className='xaxis'>
            <Label content="content" position="insideBottom" offset={0} />
          </XAxis>
          <YAxis stroke='gray'/>
          <Tooltip contentStyle={{ backgroundColor: 'white', borderColor: 'black' }} />
          <Bar dataKey="pv" name="Students" fill="#FFA500" />
          <Bar dataKey="uv" name="Employees" fill="#3362E1" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart;