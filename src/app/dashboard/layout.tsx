import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full md:pl-[300px] dark:bg-[#161618]">
        <Header />
        {children}
      </div>
    </div>
  );
}
