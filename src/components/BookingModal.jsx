import React, { useState } from "react";
import axios from "axios";

export default function BookingModal({ ad, isOpen, onClose }) {
  const [date, setDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "/api/bookings",
        { adId: ad._id, date },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      alert("Booking request sent!");
      onClose();
    } catch (err) {
      alert(err.response?.data?.message || "Booking failed");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded shadow-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Book Equipment</h2>
        <p className="mb-2"><strong>{ad.name}</strong></p>
        <form onSubmit={handleSubmit}>
          <label className="block mb-2">Select Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="border p-2 mb-4 w-full"
          />
          <div className="flex justify-between">
            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
              Submit Booking
            </button>
            <button type="button" onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
