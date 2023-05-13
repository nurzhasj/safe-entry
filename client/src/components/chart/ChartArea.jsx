import './chart.scss';
import React from 'react';
import { Area, AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    uv: 20,
    pv: 24,
    amt: 24,
  },
  {
    name: 'Tue',
    uv: 30,
    pv: 13,
    amt: 22,
  },
  {
    name: 'Wed',
    uv: 20,
    pv: 98,
    amt: 22,
  },
  {
    name: 'Thu',
    uv: 27,
    pv: 39,
    amt: 20,
  },
  {
    name: 'Fri',
    uv: 18,
    pv: 48,
    amt: 21,
  },
  {
    name: 'Sat',
    uv: 23,
    pv: 38,
    amt: 25,
  },
  {
    name: 'Sun',
    uv: 34,
    pv: 43,
    amt: 21,
  },
];


const ChartArea = () => {
  return (
    <div className="chart">
      <div className="title">Weekly Gate Records</div>
        <ResponsiveContainer width="100%" aspect={2 / 1}>
        <AreaChart 
          width={730} 
          height={250} 
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="green" stopOpacity={0.8}/>
        <stop offset="95%" stopColor="#3261E2" stopOpacity={0}/>
        </linearGradient>
        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#3462E1" stopOpacity={0.8}/>
        <stop offset="95%" stopColor="#3462E1" stopOpacity={0}/>
        </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#3462E1" fillOpacity={1} fill="url(#colorUv)" />
        </AreaChart>
        </ResponsiveContainer>
      </div>
  )
}

export default ChartArea;