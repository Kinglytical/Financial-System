import Navbar from "@/components/Navbar";
import CardItems from "@/components/CardItems";
import CountChart from "@/components/CountChart";
import CashFlowChart from "@/components/CashFlowChart";
import TotalExpense from "@/components/TotalExpense";
import CardInsight from "@/components/CardsInsight";
import ActionCard from "@/components/Action";
import MonthlySummary from "@/components/MonthlySummary";

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
            <CountChart />
          </div>
          {/* CHART RIGHT */}
          <div className="w-full lg:w-2/3 ">
            <CashFlowChart />
          </div>
        </div>
        <div className="">
          <TotalExpense />
        </div>
      </div>
      {/* Right */}
      <div className="w-full lg:w-1/3">
        <div className="bg-amber-100 rounded-xl p-3 my-2">
          <h1 className="text-lg font-bold text-center">
            Welcome to Expenses Dashboard
          </h1>
          <p className="text-center text-sm text-gray-700 mt-1">
            Track, manage, and analyze your expenses easily in one place.
          </p>
        </div>

        <CardInsight />
        <ActionCard />
        <MonthlySummary />
      </div>
    </div>
  );
};

export default expensesPage;
