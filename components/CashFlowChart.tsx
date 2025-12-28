"use client";

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

// #region Sample data
const data = [
  {
    name: 'Jan',
    FixedCosts: 4000,
    VariableCosts: 2400,
    OtherCosts: 2400,
  },
  {
    name: 'Feb',
    FixedCosts: 3000,
    VariableCosts: 1398,
    OtherCosts: 2210,
  },
  {
    name: 'Mar',
    FixedCosts: 2000,
    VariableCosts: 9800,
    OtherCosts: 2290,
  },
  {
    name: 'Apr',
    FixedCosts: 2780,
    VariableCosts: 3908,
    OtherCosts: 2000,
  },
  {
    name: 'June',
    FixedCosts: 1890,
    VariableCosts: 4800,
    OtherCosts: 2181,
  },
  {
    name: 'July',
    FixedCosts: 2390,
    VariableCosts: 3800,
    OtherCosts: 2500,
  },
  {
    name: 'August',
    FixedCosts: 3490,
    VariableCosts: 4300,
    OtherCosts: 2100,
  },
  {
    name: 'August',
    FixedCosts: 3490,
    VariableCosts: 4300,
    OtherCosts: 2100,
  },
  {
    name: 'Sept',
    FixedCosts: 3490,
    VariableCosts: 4300,
    OtherCosts: 2100,
  },
  {
    name: 'Okt',
    FixedCosts: 3490,
    VariableCosts: 4300,
    OtherCosts: 2100,
  },
  {
    name: 'Nov',
    FixedCosts: 3490,
    VariableCosts: 4300,
    OtherCosts: 2100,
  },
  {
    name: 'Des',
    FixedCosts: 3490,
    VariableCosts: 4300,
    OtherCosts: 2100,
  },
];

// #endregion
const CashFlowChart = () => {
  return (
    <div className="bg-[#EAF2F6] rounded-xl p-3 my-2">
        <h1 className = "text-sm text-[#1F2937] font-bold mb-4">Cashflow Summary</h1>
    <AreaChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.628 }}
      responsive
      data={data}
    >
      <CartesianGrid strokeDasharray="3 3" vertical={false} />
      <XAxis dataKey="name" axisLine={false} tick={{ fontSize: 10, fill: "#475569"  }} tickLine={false} />
      <YAxis width="auto" axisLine={false} tick={{ fontSize: 10, fill: "#475569" }} tickLine={false} />
      <Tooltip />
      <Area type="monotone" dataKey="FixedCosts" stackId="1" stroke="#00B7B5" fill="#00B7B5" />
      <Area type="monotone" dataKey="VariableCosts" stackId="1" stroke="#018790" fill="#018790" />
      <Area type="monotone" dataKey="OtherCosts" stackId="1" stroke="#005461" fill="#005461" />
      <RechartsDevtools />
    </AreaChart>
    </div>
  );
};

export default CashFlowChart;