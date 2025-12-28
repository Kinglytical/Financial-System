"use client";

import { RadialBarChart, RadialBar, Legend } from "recharts";
import { RechartsDevtools } from "@recharts/devtools";
import Image from "next/image";

// #region Sample data
const data = [
  {
    name: "Paid",
    uv: 30,
    fill: "#6DC3BB",
  },
  {
    name: "Pending",
    uv: 28,
    fill: "#393D7E",
  },
  {
    name: "Rejected",
    uv: 10,
    fill: "#EF4444",
  },
];

// #endregion

const CountChart = () => {
  return (
    <div className="bg-[#F9DFDF] rounded-xl p-4">
      <h1 className="text-sm text-[#1F2937] font-bold mb-4">
        Transaction Status
      </h1>
      <div className="flex justify-center items-center relative w-full">
        <RadialBarChart
          style={{
            width: "100%",
            maxWidth: "700px",
            maxHeight: "80vh",
            aspectRatio: 1,
          }}
          responsive
          cx="50%"
          barSize={60}
          data={data}
          innerRadius={40}
        >
          <RadialBar background dataKey="uv" />
          <RechartsDevtools />
        </RadialBarChart>
        <Image
          src="/expenses.png"
          alt="More"
          width={40}
          height={40}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <div className="flex justify-center gap-6 mt-6 text-center">
        {[
          { label: "Paid", value: data[0]?.uv, color: "#6DC3BB" },
          { label: "Pending", value: data[1]?.uv, color: "#393D7E" },
          { label: "Rejected", value: data[2]?.uv, color: "#EF4444" },
        ].map((item) => (
          <div key={item.label} className="flex flex-col items-center">
            <span
              className="w-3 h-3 rounded-full mb-1"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-sm font-semibold">{item.value}</span>
            <span className="text-[10px] text-slate-500">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountChart;
