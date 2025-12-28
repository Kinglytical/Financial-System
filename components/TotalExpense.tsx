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
import { color } from "motion/react";

// #region Sample data
const data = [
  { name: "Jan", payroll: 4200, operational: 2100, marketing: 900 },
  { name: "Feb", payroll: 4000, operational: 2300, marketing: 700 },
  { name: "Mar", payroll: 4600, operational: 2600, marketing: 1200 },
  { name: "Apr", payroll: 4400, operational: 2400, marketing: 800 },
  { name: "May", payroll: 4300, operational: 2500, marketing: 950 },
  { name: "Jun", payroll: 4700, operational: 2700, marketing: 1100 },
  { name: "Jul", payroll: 4800, operational: 2900, marketing: 1300 },
  { name: "Aug", payroll: 4750, operational: 2800, marketing: 1250 },
  { name: "Sep", payroll: 4600, operational: 2750, marketing: 1000 },
  { name: "Oct", payroll: 4900, operational: 3000, marketing: 1400 },
  { name: "Nov", payroll: 5100, operational: 3100, marketing: 1500 },
  { name: "Dec", payroll: 5300, operational: 3200, marketing: 1600 },
];

// #endregion
const TotalExpense = () => {
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
        data={data}
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
        <Bar dataKey="payroll" stackId="a" fill="#3F9AAE" barSize={20} radius={0} />
        <Bar
          dataKey="operational"
          stackId="a"
          fill="#79C9C5"
          barSize={20}
          radius={0}
        />
        <Bar
          dataKey="marketing"
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

export default TotalExpense;
