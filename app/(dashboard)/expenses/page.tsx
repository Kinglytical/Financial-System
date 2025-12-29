import Navbar from "@/components/Navbar";
import CardItems from "@/components/CardItems";
import CountChart from "@/components/CountChart";
import CashFlowChart from "@/components/CashFlowChart";
import TotalExpense from "@/components/TotalExpense";
import CardInsight from "@/components/CardsInsight";
import ActionCard from "@/components/Action";
import MonthlySummary from "@/components/MonthlySummary";
import AccountingCalender from "@/components/calender";

const Action = [
  {
    id: "task1",
    task: "Pending Payments",
    icon: "⚠️",
    amount: 3,
    link: "expenses/form",
  },
  {
    id: "task2",
    task: "Rejected",
    icon: "📌",
    amount: 1,
    link: "expenses/form",
  },
  {
    id: "task3",
    task: "Invoice",
    icon: "⏰",
    amount: 1,
    link: "expenses/form",
  },
];

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

const data_cashFlow_expenses = [
  {
    name: "Jan",
    FixedCosts: 4000,
    VariableCosts: 2400,
    OtherCosts: 2400,
  },
  {
    name: "Feb",
    FixedCosts: 3000,
    VariableCosts: 1398,
    OtherCosts: 2210,
  },
  {
    name: "Mar",
    FixedCosts: 2000,
    VariableCosts: 9800,
    OtherCosts: 2290,
  },
  {
    name: "Apr",
    FixedCosts: 2780,
    VariableCosts: 3908,
    OtherCosts: 2000,
  },
  {
    name: "June",
    FixedCosts: 1890,
    VariableCosts: 4800,
    OtherCosts: 2181,
  },
  {
    name: "July",
    FixedCosts: 2390,
    VariableCosts: 3800,
    OtherCosts: 2500,
  },
  {
    name: "August",
    FixedCosts: 3490,
    VariableCosts: 4300,
    OtherCosts: 2100,
  },
  {
    name: "August",
    FixedCosts: 3490,
    VariableCosts: 4300,
    OtherCosts: 2100,
  },
  {
    name: "Sept",
    FixedCosts: 3490,
    VariableCosts: 4300,
    OtherCosts: 2100,
  },
  {
    name: "Okt",
    FixedCosts: 3490,
    VariableCosts: 4300,
    OtherCosts: 2100,
  },
  {
    name: "Nov",
    FixedCosts: 3490,
    VariableCosts: 4300,
    OtherCosts: 2100,
  },
  {
    name: "Des",
    FixedCosts: 3490,
    VariableCosts: 4300,
    OtherCosts: 2100,
  },
];

const data_Total_Expenses = [
  { name: "Jan", Payroll: 4200, Operational: 2100, Marketing: 900 },
  { name: "Feb", Payroll: 4000, Operational: 2300, Marketing: 700 },
  { name: "Mar", Payroll: 4600, Operational: 2600, Marketing: 1200 },
  { name: "Apr", Payroll: 4400, Operational: 2400, Marketing: 800 },
  { name: "May", Payroll: 4300, Operational: 2500, Marketing: 950 },
  { name: "Jun", Payroll: 4700, Operational: 2700, Marketing: 1100 },
  { name: "Jul", Payroll: 4800, Operational: 2900, Marketing: 1300 },
  { name: "Aug", Payroll: 4750, Operational: 2800, Marketing: 1250 },
  { name: "Sep", Payroll: 4600, Operational: 2750, Marketing: 1000 },
  { name: "Oct", Payroll: 4900, Operational: 3000, Marketing: 1400 },
  { name: "Nov", Payroll: 5100, Operational: 3100, Marketing: 1500 },
  { name: "Dec", Payroll: 5300, Operational: 3200, Marketing: 1600 },
];

const insight = [
  {
    icon: "⚠️",
    status: "Pending Payments",
    amount: "$12,000",

    period: "This month",
    trend: "up", // up | down | flat
    delta: "+8%", // perubahan dibanding bulan lalu
    severity: "warning", // warning | good | bad
    note: "Awaiting settlement",
  },
  {
    icon: "✅",
    status: "Fixed costs",
    amount: "$12,000",

    period: "This month",
    trend: "flat",
    delta: "0%",
    severity: "good",
    note: "Stable recurring expenses",
  },
  {
    icon: "🔻",
    status: "Variable costs",
    amount: "$12,000",

    period: "This month",
    trend: "up",
    delta: "+12%",
    severity: "warning",
    note: "Higher operational spending",
  },
  {
    icon: "📌",
    status: "Rejected transactions",
    amount: "$12,000",

    period: "This month",
    trend: "down",
    delta: "-5%",
    severity: "bad",
    note: "Requires review",
  },
];

const expensesPage = () => {
  return (
    <div className="flex flex-col p-4 gap-4 md:flex-row">
      {/* Left */}
      <div className="w-full lg:w-2/3">
        <div className="flex gap-2 flex-wrap m-2">
          <CardItems type="Total Payments" />
          <CardItems type="Pending Payments" />
          <CardItems type="This Month Spend" />
          <CardItems type="Last Transaction" />
        </div>
        {/* CHART */}
        <div className="flex flex-col lg:flex-row gap-1">
          {/* CHART LEFT */}
          <div className="w-full lg:w-1/3 p-2">
            <CountChart items={data} />
          </div>
          {/* CHART RIGHT */}
          <div className="w-full lg:w-2/3 ">
            <CashFlowChart items={data_cashFlow_expenses} />
          </div>
        </div>
        <div className="">
          <TotalExpense items={data_Total_Expenses} />
        </div>
      </div>
      {/* Right */}
      <div className="w-full lg:w-1/3">
        {/* <div className="bg-amber-100 rounded-xl p-3 my-2">
          <h1 className="text-lg font-bold text-center">
            Welcome to Expenses Dashboard
          </h1>
          <p className="text-center text-sm text-gray-700 mt-1">
            Track, manage, and analyze your expenses easily in one place.
          </p>
        </div> */}
          <AccountingCalender />
        

        <CardInsight items={insight} />
        <ActionCard items={Action} />
        {/* <MonthlySummary /> */}
      </div>
    </div>
  );
};

export default expensesPage;
