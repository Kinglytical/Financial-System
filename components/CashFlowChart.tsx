"use client";

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

// #region Sample data

interface cashFlowItem {
  name:String,
  FixedCosts:Number,
  VariableCosts:Number,
  OtherCosts:Number
}

interface cashFlowProps {
  items : cashFlowItem[]
}

// #endregion
const CashFlowChart = ({items} : cashFlowProps) => {
  return (
    <div className="bg-[#EAF2F6] rounded-xl p-3 my-2">
        <h1 className = "text-sm text-[#1F2937] font-bold mb-4">Cashflow Summary</h1>
    <AreaChart
      style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.628 }}
      responsive
      data={items}
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