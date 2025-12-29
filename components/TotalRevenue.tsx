"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { RechartsDevtools } from "@recharts/devtools";

// #region Sample data


interface dataTotal {
  name: String,
  Paid: Number,
  Outstanding: Number,
  Overdue:Number
}

interface dataTotalProps {
  items : dataTotal[]
}

// #endregion
const TotalRevenue = ({items} : dataTotalProps) => {
  return (
    <div className="bg-[#AEDEFC] p-4 rounded-xl">
      <h1 className="text-sm text-[#1F2937] font-bold mb-4">Total Expense</h1>
      <BarChart
        style={{
          width: "100%",
          maxWidth: "700px",
          maxHeight: "70vh",
          aspectRatio: 1.5,
        }}
        responsive
        data={items}
        margin={{
          top: 20,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} style={{ color: "#FFE2AF" }} />
        <XAxis dataKey="name" axisLine={false} tick={{ fontSize: 10, fill: "#475569"  }} tickLine={false}/>
        <YAxis width="auto" axisLine={false} tick={{ fontSize: 10, fill: "#475569"  }} tickLine={false}/>
        <Tooltip />
        <Legend wrapperStyle={{ fontSize: 9 }}/>
        <Bar dataKey="Paid" stackId="a" fill="#3F9AAE" barSize={20} radius={0} />
        <Bar
          dataKey="Outstanding"
          stackId="a"
          fill="#79C9C5"
          barSize={20}
          radius={0}
        />
        <Bar
          dataKey="Overdue"
          stackId="a"
          fill="#F96E5B"
          barSize={20}
          radius={0}
        />
        <RechartsDevtools />
      </BarChart>
    </div>
  );
};

export default TotalRevenue;
