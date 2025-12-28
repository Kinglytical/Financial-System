"use client";

export default function MonthlySummary() {
  return (
    <div className="bg-[#ECD5BC] mt-2 rounded-2xl p-4">
      <h1 className="font-bold mb-3 text-sm">Monthly Summary</h1>

      <div className="grid grid-cols-2 gap-3">
        {/* Total Expenses */}
        <div className="bg-white p-3 rounded-xl shadow-sm">
          <p className="text-xs text-gray-500">Total Expenses</p>
          <h2 className="font-bold text-lg mt-1">Rp12,450,000</h2>
        </div>

        {/* Pending Payments */}
        <div className="bg-white p-3 rounded-xl shadow-sm">
          <p className="text-xs text-gray-500">Pending Payments</p>
          <h2 className="font-bold text-lg mt-1 text-orange-600">
            Rp3,200,000
          </h2>
        </div>

        {/* Fixed Costs */}
        <div className="bg-white p-3 rounded-xl shadow-sm">
          <p className="text-xs text-gray-500">Fixed Costs</p>
          <h2 className="font-bold text-lg mt-1">Rp5,800,000</h2>
        </div>

        {/* Highest Driver */}
        <div className="bg-white p-3 rounded-xl shadow-sm">
          <p className="text-xs text-gray-500">Highest Driver</p>
          <h2 className="font-bold text-sm mt-1">Budi Santoso</h2>
          <p className="text-xs text-gray-400">Rp1,250,000</p>
        </div>
      </div>
    </div>
  );
}
