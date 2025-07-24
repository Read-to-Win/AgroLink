import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-800 px-4">
      <h1 className="text-7xl font-bold text-green-700 mb-4">404</h1>
      <p className="text-2xl font-semibold mb-2">Page Not Found</p>
      <p className="text-gray-600 mb-6">The page you’re looking for doesn’t exist.</p>
      <Link
        to="/"
        className="inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
