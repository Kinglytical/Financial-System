"use client";

import { useState } from "react";

export default function RevenueForm() {
  const [status, setStatus] = useState<"outstanding" | "paid">("outstanding");

  return (
    <div className="bg-white rounded-2xl p-4 border border-slate-200">
      {/* Title */}
      <div className="mb-4">
        <h1 className="text-sm font-bold text-slate-900">New Invoice</h1>
        <p className="text-xs text-slate-500">
          Fill the form below to record an invoice.
        </p>
      </div>

      {/* Status Toggle */}
      <div className="flex gap-2 mb-4">
        <button
          type="button"
          onClick={() => setStatus("outstanding")}
          className={`px-3 py-2 rounded-xl text-xs border ${
            status === "outstanding"
              ? "bg-slate-900 text-white border-slate-900"
              : "bg-white text-slate-700 border-slate-200"
          }`}
        >
          Outstanding
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
        {/* Invoice Date */}
        <div className="flex flex-col gap-1">
          <label className="text-xs text-slate-600">Invoice Date</label>
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

        {/* Client */}
        <div className="flex flex-col gap-1 md:col-span-2">
          <label className="text-xs text-slate-600">Client / Customer</label>
          <input
            type="text"
            placeholder="e.g. PT ABC, Brand X, John Doe"
            className="border border-slate-200 rounded-xl px-3 py-2 text-sm outline-none focus:border-slate-400"
          />
        </div>

        {/* Invoice Number (optional but useful) */}
        <div className="flex flex-col gap-1 md:col-span-2">
          <label className="text-xs text-slate-600">Invoice Number (optional)</label>
          <input
            type="text"
            placeholder="e.g. INV-2025-001"
            className="border border-slate-200 rounded-xl px-3 py-2 text-sm outline-none focus:border-slate-400"
          />
        </div>

        {/* Revenue Category */}
        <div className="flex flex-col gap-1 md:col-span-2">
          <label className="text-xs text-slate-600">Revenue Category</label>
          <select className="border border-slate-200 rounded-xl px-3 py-2 text-sm outline-none focus:border-slate-400">
            <option>Project</option>
            <option>Retainer</option>
            <option>Service</option>
            <option>Consulting</option>
            <option>Other</option>
          </select>
        </div>

        {/* Conditional field */}
        {status === "paid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:col-span-2">
            <div className="flex flex-col gap-1">
              <label className="text-xs text-slate-600">Paid Date</label>
              <input
                type="date"
                className="border border-slate-200 rounded-xl px-3 py-2 text-sm outline-none focus:border-slate-400"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs text-slate-600">Payment Method</label>
              <select className="border border-slate-200 rounded-xl px-3 py-2 text-sm outline-none focus:border-slate-400">
                <option>Bank Transfer</option>
                <option>Cash</option>
                <option>Card</option>
                <option>E-Wallet</option>
              </select>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-1 md:col-span-2">
            <label className="text-xs text-slate-600">Due Date</label>
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
