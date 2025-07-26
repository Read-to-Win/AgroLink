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
      <nav className="w-full bg-[#214538] px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shadow-md">
        <h1 className="text-2xl sm:text-3xl font-bold text-white text-center sm:text-left">
          Admin Dashboard
        </h1>
        <div className="relative w-full sm:w-80 max-w-full">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 rounded-full bg-[#1a2a1a] text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 font-medium"
          />
          <FiSearch className="absolute top-2.5 left-3 text-white text-lg" />
        </div>
      </nav>

      {/* Dashboard Content */}
      <div className="px-4 sm:px-6 lg:px-10 py-8 space-y-10">
        {/* Welcome Section */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1a2a1a] mb-1">
            Welcome back, Admin 👋
          </h2>
          <p className="text-base sm:text-lg text-gray-700">
            Here’s your current sales overview
          </p>
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
            value="₵500"
            icon={<TbCash className="text-4xl text-yellow-400" />}
          />
          <StatCard
            title="Total Orders"
            value={10}
            icon={<IoCubeOutline className="text-4xl text-blue-400" />}
          />
        </div>

        {/* Recent Posts Table */}
        <div className="bg-white text-[#1a2a1a] p-4 sm:p-6 rounded-2xl shadow-md overflow-x-auto">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4">
            Recent Posts
          </h2>
          <div className="min-w-[600px]">
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
