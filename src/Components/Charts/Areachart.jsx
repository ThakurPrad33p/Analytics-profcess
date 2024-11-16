import React from "react";
import { AreaChart, Area, Tooltip } from "recharts";
// import { CartesianGrid } from "recharts";
import { XAxis } from "recharts";
import { YAxis } from "recharts";

const Areachart = () => {
  const data = [
    {
      name: "M",
      uv: 100,
      amt: 240,
    },
    {
      name: "",
      uv: 160,
    },
    {
      name: "T",
      uv: 200,
      amt: 221,
    },
    {
      name: "",
      uv: 130,
    },
    {
      name: "W",
      uv: 100,
      // amt: 229,
    },
    {
      name: "",
      uv: 230,
    },
    {
      name: "Th",
      uv: 140,
      // amt: 200,
    },
    {
      name: "",
      uv: 80,
    },
    {
      name: "F",
      uv: 130,
      // amt: 218,
    },
    {
      name: "",
      uv: 290,
    },
    {
      name: "S",
      uv: 200,
      // amt: 250,
    },
    {
      name: "",
      uv: 160,
    },
    {
      name: "S",
      uv: 230,
      // amt: 210,
    },
    {
      name: "",
      uv: 400,
    },
  ];
  return (
    <div>
      <AreaChart
        width={630}
        height={200}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#fc79fc" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#f7bcf7" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" stroke="black" />
        <YAxis  stroke="white"/>
        <Tooltip />
        <Area
          type="monotone"
          dataKey="uv"
          stroke="#f505f5"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        
      </AreaChart>
    </div>
  );
};

export default Areachart;
