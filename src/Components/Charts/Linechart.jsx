import React from "react";
import { ComposedChart, Tooltip, Legend, XAxis, YAxis, Bar } from "recharts";

const Linechart = () => {
  const data = [
    {
      name: "M",
      pv: 200,
    },
    {
      name: "T",
      pv: 300,
    },
    {
      name: "W",
      pv: 400,
    },
    {
      name: "Th",
      pv: 100,
    },
    {
      name: "F",
      pv: 150,
    },
    {
      name: "S",
      pv: 130,
    },
    {
      name: "S",
      pv: 320,
    },
  ];
  return (
    <div>
      <ComposedChart width={630} height={230} data={data}>
        <XAxis dataKey="name" />
        <YAxis stroke="white" />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" barSize={20} fill="#413ea0" />
      </ComposedChart>
    </div>
  );
};

export default Linechart;
