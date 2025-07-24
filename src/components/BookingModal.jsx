import React, { useState } from "react";
import axios from "axios";

export default function BookingModal({ product, isOpen, onClose }) {
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        setError("User not authenticated.");
        setLoading(false);
        return;
      }

      await axios.post(
        "https://agriconnect-api-aa28.onrender.com/bookEquip/bookEquipment",
        { equipId: product._id, date },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      alert("Booking request sent successfully!");
      onClose();
      setDate("");
    } catch (err) {
      setError(
        err.response?.data?.message || "Booking failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-40 z-50 px-4">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full animate-fadeIn">
        <h2 className="text-xl font-semibold mb-4 text-green-800">
          Book Equipment
        </h2>

        <p className="mb-4 text-gray-800">
          Booking for: <strong>{product.name}</strong>
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Select Date:</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <div className="flex justify-end gap-4 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded border border-gray-300 text-gray-700 hover:bg-gray-100"
              disabled={loading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit Booking"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
