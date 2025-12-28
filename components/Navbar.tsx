import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="hidden md:flex gap-2 items-center border rounded-xl p-3">
        <Image src="/search.png" width={20} height={20} alt="Logo" />
        <input
          type="text"
          placeholder="search..."
          className="w-full focus:outline-none"
        />
      </div>

      <div className="flex items-center justify-end w-full gap-2">
        <Image src="/avatar.png" width={40} height={40} alt="Avatar" className="rounded-full"/>
        <div className="flex flex-col">
            <h1 className="font-bold">Saddam</h1>
            <span className="text-[10px]">Developer</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
