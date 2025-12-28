const CardItems = ({ type }: { type: string }) => {
  return (
    <div className="odd:bg-cyan-500 even:bg-cyan-700 flex p-2 rounded-lg flex-col flex-1 text-white shadow-sm">
    <div>
      <span className="text-[10px] text-white/70 bg-[#879ed6] p-1 px-2 rounded-xl font-extrabold">12-12-2025</span>
    </div>

      <div className="flex gap-2 items-end py-3">
        <h1 className="font-bold text-lg py-1.5 text-white">1.200</h1>
        <span className="text-[7px] text-emerald-200">+ 1000</span>
      </div>

      <span className="text-xs capitalize text-white/80">{type}</span>
    </div>
  );
};

export default CardItems;
