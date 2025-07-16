import React from "react";
import StatCard from "../components/StatCard";
import { MdInventory } from "react-icons/md";
import { TbCash } from "react-icons/tb";
import { IoCubeOutline } from "react-icons/io5";
import Table from "../components/Table";
import { FiSearch } from "react-icons/fi";

const Dashboard = () => {
  return (
      <div className="w-full min-h-screen bg-[#F0FDF4] text-white">
  {/* Navbar */}
  <nav className="w-full bg-[#1a2a1a] px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shadow-md">
    <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
    <div className="relative w-full max-w-md">
      <input
        type="text"
        placeholder="Search..."
        className="w-full pl-10 pr-4 py-2 rounded-full bg-[#223322] text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
      />
      <FiSearch className="absolute top-2.5 left-3 text-white text-lg" />
    </div>
  </nav>

  {/* Dashboard Content */}
  <div className="px-6 py-10 space-y-10">
    {/* Welcome */}
    <div>
      <h2 className="text-3xl font-bold text-[#1a2a1a] mb-1">Welcome back, Admin 👋</h2>
      <p className="text-gray-700 text-lg">Here’s your current sales overview</p>
    </div>

    {/* Stat Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <StatCard
        title="Total Products"
        value={100}
        icon={<MdInventory className="text-4xl text-green-500" />}
      />
      <StatCard
        title="Total Revenue"
        value="$500"
        icon={<TbCash className="text-4xl text-yellow-400" />}
      />
      <StatCard
        title="Total Orders"
        value={10}
        icon={<IoCubeOutline className="text-4xl text-blue-400" />}
      />
    </div>

    {/* Recent Orders Table */}
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-2xl font-semibold text-[#1a2a1a] mb-4">Recent Orders</h2>
      <Table />
    </div>
  </div>
</div>

  );
};

export default Dashboard;
