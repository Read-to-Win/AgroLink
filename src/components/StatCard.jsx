import React from 'react'

const StatCard = ({ title, icon, value }) => {
  return (
   <div className="bg-[#1a2a1a] p-6 rounded-xl flex items-center justify-between shadow-md hover:shadow-xl transition duration-300 ease-in-out">
      <div>
        <p className="text-sm text-gray-400">{title}</p>
        <h3 className="text-2xl font-bold text-white">{value}</h3>
      </div>
      <div className="bg-[#223322] p-3 rounded-full">
        {icon}
      </div>
    </div>
  )
}

export default StatCard