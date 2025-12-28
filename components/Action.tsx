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

const ActionCard = () => {
  return (
    <div className="bg-[#EFECE3] p-4 mt-2 rounded-xl">
      <h1 className="font-bold mb-4">Action Required</h1>

      <div className="flex flex-col gap-3">
        {Action.length === 0 ? (
          <p className="text-xs text-gray-500">No action required 🎉</p>
        ) : (
          Action.map((i) => (
            <div
              key={i.id}
              className="flex items-center justify-between bg-white p-3 rounded-xl"
            >
              {/* Left: icon + text */}
              <div className="flex items-center gap-3">
                <span className="text-lg">{i.icon}</span>

                <div className="flex flex-col">
                  <span className="text-xs font-bold">{i.amount}</span>
                  <span className="text-xs text-gray-600">{i.task}</span>
                </div>
              </div>

              {/* Right: action */}
              <a
                href={i.link}
                className="text-xs bg-[#B7B89F] text-white font-semibold px-3 py-1.5 rounded-xl hover:opacity-90"
              >
                Open
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ActionCard