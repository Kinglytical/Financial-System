"use client";

import { RadialBarChart, RadialBar, Legend } from "recharts";
import { RechartsDevtools } from "@recharts/devtools";
import Image from "next/image";

// #region Sample data
interface ChartItem {
  name: string,
  uv: number,
  fill: string
}

interface chartProps {
  items: ChartItem[]
}

// #endregion

const CountChart = ({items} : chartProps) => {
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
          data={items}
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
          { label: items[0]?.name, value: items[0]?.uv, color: "#6DC3BB" },
          { label: items[1]?.name, value: items[1]?.uv, color: "#393D7E" },
          { label: items[2]?.name, value: items[2]?.uv, color: "#EF4444" },
        ].map((items) => (
          <div key={items.label} className="flex flex-col items-center">
            <span
              className="w-3 h-3 rounded-full mb-1"
              style={{ backgroundColor: items.color }}
            />
            <span className="text-sm font-semibold">{items.value}</span>
            <span className="text-[10px] text-slate-500">{items.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountChart;
