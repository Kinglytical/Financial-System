"use case"



interface insightItems {
  icon: string,
  status: string,
  amount: string,
  period: string,
  trend: string,
  delta: string,
  severity: string,
  note: string
}

interface insightItemsProps {
  items: insightItems[]
}

const CardInsight = ({items} : insightItemsProps) => {
    return (
        <div className="bg-[#F5F2F2] rounded-xl p-3 shadow-md">
          <h1 className="font-bold mb-4">Expense Insights</h1>
          <div className="flex flex-col gap-3">
            {items.map((item) => (
              <div
                key={item.status}
                className="bg-[#FCF9EA] flex gap-3 items-center rounded-xl p-3 hover:bg-[#E8D1C5]"
              >
                <span>{item.icon}</span>
                <div className="flex flex-col gap-1 mt-2">
                  <span className="font-bold">{item.status}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-slate-500">
                      {item.period}
                    </span>
                    <span>•</span>
                    <span className="text-[10px] text-slate-500">
                      {item.note}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-1 mt-2 text-right ml-auto">
                  <span className="text-xs font-bold">{item.amount}</span>
                  <span
                    className={`text-xs font-bold ${
                      item.severity === "warning"
                        ? "text-yellow-500"
                        : item.severity === "good"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {item.delta}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
    )
}

export default CardInsight