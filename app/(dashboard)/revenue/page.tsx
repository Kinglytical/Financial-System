import Navbar from "@/components/Navbar";
import CardItems from "@/components/CardItems";
import CountChart from "@/components/CountChart";
import CashFlowChart from "@/components/CashFlowChart";

import CardInsight from "@/components/CardsInsight";
import ActionCard from "@/components/Action";
import MonthlySummary from "@/components/MonthlySummary";
import TotalRevenue from "@/components/TotalRevenue";
import AccountingCalender from "@/components/calender";

const RevenueAction = [
  {
    id: "rev-task1",
    task: "Unpaid Invoices",
    icon: "⚠️",
    amount: 4,
    link: "revenue/invoices",
  },
  {
    id: "rev-task2",
    task: "Overdue Invoices",
    icon: "⏰",
    amount: 2,
    link: "revenue/invoices",
  },
  {
    id: "rev-task3",
    task: "Payment Confirmation",
    icon: "💰",
    amount: 1,
    link: "revenue/payments",
  },
];

const data_revenue = [
  {
    name: "Paid",
    uv: 45,
    fill: "#6DC3BB",
  },
  {
    name: "Outstanding",
    uv: 18,
    fill: "#393D7E",
  },
  {
    name: "Overdue",
    uv: 6,
    fill: "#EF4444",
  },
];

const data_cashFlow_revenue = [
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
    OtherCosts: 5210,
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
    OtherCosts: 8181,
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

const data_Total_Revenue = [
  { name: "Jan", Paid: 6800, Outstanding: 2400, Overdue: 600 },
  { name: "Feb", Paid: 7200, Outstanding: 2100, Overdue: 500 },
  { name: "Mar", Paid: 8100, Outstanding: 2600, Overdue: 700 },
  { name: "Apr", Paid: 7900, Outstanding: 2300, Overdue: 550 },
  { name: "May", Paid: 7600, Outstanding: 2500, Overdue: 650 },
  { name: "Jun", Paid: 8400, Outstanding: 2700, Overdue: 800 },
  { name: "Jul", Paid: 8800, Outstanding: 2900, Overdue: 900 },
  { name: "Aug", Paid: 8600, Outstanding: 2800, Overdue: 850 },
  { name: "Sep", Paid: 8200, Outstanding: 2750, Overdue: 700 },
  { name: "Oct", Paid: 9100, Outstanding: 3000, Overdue: 950 },
  { name: "Nov", Paid: 9600, Outstanding: 3100, Overdue: 1000 },
  { name: "Dec", Paid: 10200, Outstanding: 3200, Overdue: 1100 },
];

const insight = [
  {
    icon: "⚠️",
    status: "Outstanding Invoices",
    amount: "$18,500",

    period: "This month",
    trend: "up", // up | down | flat
    delta: "+10%",
    severity: "warning", // warning | good | bad
    note: "Several invoices awaiting payment",
  },
  {
    icon: "💰",
    status: "Paid Revenue",
    amount: "$42,000",

    period: "This month",
    trend: "up",
    delta: "+15%",
    severity: "good",
    note: "Strong cash inflow this month",
  },
  {
    icon: "⏰",
    status: "Overdue Invoices",
    amount: "$6,300",

    period: "This month",
    trend: "up",
    delta: "+5%",
    severity: "bad",
    note: "Follow-up required on overdue payments",
  },
  {
    icon: "📄",
    status: "Invoices Issued",
    amount: "28",

    period: "This month",
    trend: "flat",
    delta: "0%",
    severity: "good",
    note: "Consistent invoicing volume",
  },
];


const RevenuePage = () => {
  return (
    <div className="flex flex-col p-4 gap-4 md:flex-row">
      {/* Left */}
      <div className="w-full lg:w-2/3">
        <div className="flex gap-2 flex-wrap m-2">
          <CardItems type="Total Revenue" />
          <CardItems type="Pending Invoices" />
          <CardItems type="This Month Income" />
          <CardItems type="Overdue Invoices" />
        </div>
        {/* CHART */}
        <div className="flex flex-col lg:flex-row gap-1">
          {/* CHART LEFT */}
          <div className="w-full lg:w-1/3 p-2">
            <CountChart items={data_revenue}/>
          </div>
          {/* CHART RIGHT */}
          <div className="w-full lg:w-2/3 ">
            <CashFlowChart items={data_cashFlow_revenue} />
          </div>
        </div>
        <div className="">
          <TotalRevenue items={data_Total_Revenue}/>
        </div>
      </div>
      {/* Right */}
      <div className="w-full lg:w-1/3 flex flex-col gap-5">
        <AccountingCalender />

        <CardInsight items={insight}/>
        <ActionCard items={RevenueAction} />
      </div>
    </div>
  );
};

export default RevenuePage;
