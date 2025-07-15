import React from "react";
import StatCard from "../components/StatCard";
import { MdInventory } from "react-icons/md";
import { TbCash } from "react-icons/tb";
import { IoCubeOutline } from "react-icons/io5";
import Table from "../components/Table";
import { FiSearch } from "react-icons/fi";

const Dashboard = () => {
  return (
    <div className="w-full min-h-screen bg-[#112211]">
      {/* Navbar */}
      <nav className="w-full bg-[#1a2a1a] p-4 flex items-center justify-between shadow-lg">
        <h1 className="text-white text-2xl font-bold">Admin Dashboard</h1>
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#223322] text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <FiSearch className="absolute top-2.5 left-3 text-white text-lg" />
        </div>
      </nav>

      {/* Dashboard Content */}
      <div className="p-6">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-1">
            Welcome back, Admin 👋
          </h2>
          <p className="text-lg text-gray-300">
            Here’s your current sales overview
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <StatCard
            title="Total Products"
            value={100}
            icon={<MdInventory className="text-4xl text-green-400" />}
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

        <div className="bg-[#1a2a1a] p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Recent Orders
          </h2>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
