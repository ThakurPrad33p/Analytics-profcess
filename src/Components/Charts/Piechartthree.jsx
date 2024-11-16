import { PieChart } from "recharts";
import { Pie } from "recharts";

import React from "react";

const Piechartthree = () => {

  const data1 = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
    },
  ];
  return (
    <div>

      <PieChart width={250} height={250}>
        <defs>
          <linearGradient id="gradient2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="yellow" />
            <stop offset="100%" stopColor="#eb26d0" />
          </linearGradient>
        </defs>
        <Pie
          data={data1}
          dataKey="uv"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={85}
          outerRadius={100}
          fill="url(#gradient2)"
          stroke="none"
        />
      </PieChart>

    </div>
  );
};

export default Piechartthree;
