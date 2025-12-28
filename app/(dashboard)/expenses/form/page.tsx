"use client"

import CategoryForm from "@/components/CategoryForm";
import ExpenseForm from "@/components/ExpenseForm";
import PaymentForm from "@/components/PaymentForm";
import { useState } from "react";

const dataForm = [
    {
        id:"expense Setup",
        Tab : "expense",
        components: ExpenseForm
    },
    {
        id:"Category",
        Tab : "category",
        components: CategoryForm
    },
    {
        id:"Payment",
        Tab : "payment",
        components: PaymentForm
    },
]

const FormPage = () => {
    const [activeTab, setActiveTab] = useState("expense")
  return (
	<div className="m-5">
        {/* <h1>Form Expenses Report</h1> */}
        <div className="flex gap-5">
            {/* LEFT
            <div className="flex flex-col gap-2">
            {dataForm.map((i) => (
                <div className="bg-[#BBE0EF] rounded-xl" key={i.Tab}>
                <button onClick={() => setActiveTab(i.Tab)} className="p-2 font-bold lg:w-100 lg:text-lg text-xs">{i.id}</button>
            </div>
            ))}
            
            </div> */}
            {/* Right */}
            <div className="w-full">
            {dataForm.map((u) => {
                const Components = u.components
                return (
                    <div className="" key={u.Tab}>
                        {activeTab === (u.Tab) && <Components />}
                    </div>
                )
            })}
            </div>
        </div>
    </div>
  );
}

export default FormPage