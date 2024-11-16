import { PieChart } from "recharts";
import { Pie } from "recharts";

import React from 'react'

const Piechart = () => {

      const data1 = [
        {
          name: "Page A",
          uv: 4000,
          pv: 2400,
        }
      ];
  return (
    <div className="">
      {/* <div className="absolute flex justify-center items-center text-white text-xl">87%</div> */}
        <PieChart width={250} height={250}>
        <defs>
          <linearGradient id="gradient3" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2654fc" />
            <stop offset="100%" stopColor="#042087" />
          </linearGradient>
        </defs>
        <Pie
          data={data1}
          dataKey="uv"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={0}
          outerRadius={100}
          fill="url(#gradient3)"
          stroke="none"
        />
      </PieChart>
      
    </div>
  )
}

export default Piechart