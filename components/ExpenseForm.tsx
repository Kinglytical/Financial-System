"use client";

import { useState } from "react";

export default function ExpenseFormSimple() {
  const [status, setStatus] = useState<"pending" | "paid">("pending");

  return (
    <div className="bg-white rounded-2xl p-4 border border-slate-200">
      {/* Title */}
      <div className="mb-4">
        <h1 className="text-sm font-bold text-slate-900">New Expense</h1>
        <p className="text-xs text-slate-500">
          Fill the form below to record an expense.
        </p>
      </div>

      {/* Status Toggle */}
      <div className="flex gap-2 mb-4">
        <button
          type="button"
          onClick={() => setStatus("pending")}
          className={`px-3 py-2 rounded-xl text-xs border ${
            status === "pending"
              ? "bg-slate-900 text-white border-slate-900"
              : "bg-white text-slate-700 border-slate-200"
          }`}
        >
          Pending
        </button>

        <button
          type="button"
          onClick={() => setStatus("paid")}
          className={`px-3 py-2 rounded-xl text-xs border ${
            status === "paid"
              ? "bg-slate-900 text-white border-slate-900"
              : "bg-white text-slate-700 border-slate-200"
          }`}
        >
          Paid
        </button>
      </div>

      {/* Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {/* Date */}
        <div className="flex flex-col gap-1">
          <label className="text-xs text-slate-600">Date</label>
          <input
            type="date"
            className="border border-slate-200 rounded-xl px-3 py-2 text-sm outline-none focus:border-slate-400"
          />
        </div>

        {/* Amount */}
        <div className="flex flex-col gap-1">
          <label className="text-xs text-slate-600">Amount (Rp)</label>
          <input
            type="number"
            placeholder="0"
            className="border border-slate-200 rounded-xl px-3 py-2 text-sm outline-none focus:border-slate-400"
          />
        </div>

        {/* Vendor */}
        <div className="flex flex-col gap-1 md:col-span-2">
          <label className="text-xs text-slate-600">Vendor / Payee</label>
          <input
            type="text"
            placeholder="e.g. Tokopedia, PT ABC, Budi"
            className="border border-slate-200 rounded-xl px-3 py-2 text-sm outline-none focus:border-slate-400"
          />
        </div>

        {/* Category */}
        <div className="flex flex-col gap-1 md:col-span-2">
          <label className="text-xs text-slate-600">Category</label>
          <select className="border border-slate-200 rounded-xl px-3 py-2 text-sm outline-none focus:border-slate-400">
            <option>Operational</option>
            <option>Marketing</option>
            <option>Payroll</option>
            <option>Utilities</option>
            <option>Transport</option>
            <option>Other</option>
          </select>
        </div>

        {/* Conditional field */}
        {status === "paid" ? (
          <div className="flex flex-col gap-1 md:col-span-2">
            <label className="text-xs text-slate-600">Payment Method</label>
            <select className="border border-slate-200 rounded-xl px-3 py-2 text-sm outline-none focus:border-slate-400">
              <option>Cash</option>
              <option>Bank Transfer</option>
              <option>Card</option>
              <option>E-Wallet</option>
            </select>
          </div>
        ) : (
          <div className="flex flex-col gap-1 md:col-span-2">
            <label className="text-xs text-slate-600">Due Date (optional)</label>
            <input
              type="date"
              className="border border-slate-200 rounded-xl px-3 py-2 text-sm outline-none focus:border-slate-400"
            />
          </div>
        )}

        {/* Notes */}
        <div className="flex flex-col gap-1 md:col-span-2">
          <label className="text-xs text-slate-600">Notes (optional)</label>
          <textarea
            placeholder="Short description..."
            className="border border-slate-200 rounded-xl px-3 py-2 text-sm outline-none focus:border-slate-400 min-h-[90px]"
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-2 mt-4">
        <button
          type="button"
          className="px-4 py-2 rounded-xl border border-slate-200 text-sm text-slate-700 hover:bg-slate-50"
        >
          Cancel
        </button>
        <button
          type="button"
          className="px-4 py-2 rounded-xl bg-slate-900 text-white text-sm hover:bg-slate-800"
        >
          Save
        </button>
      </div>
    </div>
  );
}
