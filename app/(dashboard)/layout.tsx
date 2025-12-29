import Menu from "@/components/menu";
import Image from "next/image";
import Navbar from "@/components/Navbar";


export default function dashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex">
        {/* Left Sidebar */}
        <div className="w-[18%] flex flex-col font-bold bg-[#FFE6D4] p-2">
          <Image src="/logo.png" width={150} height={150} alt="Logo" className="bg-amber-400 p-2 rounded-xl"/>
          <Menu/>
        </div>
        {/* Right Sidebar */}
        <div className="flex flex-col w-[82%]">
          <Navbar />
          {children}
        </div>
        
    </div>
  );
}
