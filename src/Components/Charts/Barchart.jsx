import { CartesianGrid } from "recharts";
import { XAxis } from "recharts";
import { YAxis } from "recharts";
import { BarChart } from "recharts";
import { Bar } from "recharts";
import { Tooltip } from "recharts";
import { Legend } from "recharts";

import React from 'react'

const Barchart = () => {
    const data = [
        {
          name: "Page A",
          uv: 4000,
          pv: 2400,
        },
        {
          name: "Page B",
          uv: 3000,
          pv: 1398,
        },
        {
          name: "Page C",
          uv: 2000,
          pv: 9800,
        },
        {
          name: "Page D",
          uv: 2780,
          pv: 3908,
        },
        {
          name: "Page E",
          uv: 1890,
          pv: 4800,
        },
        {
          name: "Page F",
          uv: 2390,
          pv: 3800,
        },
        {
          name: "Page G",
          uv: 3490,
          pv: 4300,
        },
      ];
  return (
    <div>
        <BarChart width={730} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="pink" />
        {/* <Bar dataKey="pv" fill="yellow" /> */}
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>
    </div>
  )
}

export default Barchart