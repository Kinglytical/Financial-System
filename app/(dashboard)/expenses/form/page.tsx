"use client"

import ExpenseForm from "@/components/ExpenseForm";
import { useState } from "react";

const dataForm = [
    {
        id:"expense Setup",
        Tab : "expense",
        components: ExpenseForm
    },
]

const FormPage = () => {
    const [activeTab, setActiveTab] = useState("expense")
  return (
	<div className="m-5">
        {/* <h1>Form Expenses Report</h1> */}
        <div className="flex gap-5">
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