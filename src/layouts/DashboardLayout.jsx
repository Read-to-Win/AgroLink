import { useState } from "react";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router";
const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <div className="flex min-h-screen bg-[#112211] text-white">
      {/* Sidebar (controlled via props) */}
      <SideBar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Main Content shifts based on sidebar width */}
      <div
        className={`w-full transition-all duration-300 px-6 pt-6 ${
          isSidebarOpen ? "ml-[240px]" : "ml-[80px]"
        }`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
