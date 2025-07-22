import React, { useEffect, useState } from "react";
import {
  apiGetNotifications,
  apiUpdateNotificationStatus,
} from "../service/adtverts";
import { toast } from "react-toastify";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FiCheckCircle, FiXCircle } from "react-icons/fi";
import { formatDistanceToNow } from "date-fns";

const Notifications = () => {
 const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  const handleAccept = async (id) => {
    try {
      await apiUpdateNotificationStatus(id, "accepted");
      setNotifications((prev) =>
        prev.map((notif) =>
          notif._id === id ? { ...notif, status: "accepted" } : notif
        )
      );
      toast.success("Request accepted");
    } catch (error) {
      toast.error("Failed to accept request");
    }
  };

  const handleDecline = async (id) => {
    if (!window.confirm("Are you sure you want to decline this request?")) return;

    try {
      await apiUpdateNotificationStatus(id, "declined");
      setNotifications((prev) =>
        prev.map((notif) =>
          notif._id === id ? { ...notif, status: "declined" } : notif
        )
      );
      toast.info("Request declined");
    } catch (error) {
      toast.error("Failed to decline request");
    }
  };

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const res = await apiGetNotifications();
        setNotifications(res.data);
      } catch (error) {
        toast.error("Failed to fetch notifications");
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  const filtered = notifications.filter((n) =>
    filter === "all" ? true : n.status === filter
  );
  return (
    <div className="min-h-screen bg-[#f4f4f4] py-10 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-6">
          Notifications
        </h2>

        {/* Filter buttons */}
        <div className="flex justify-center gap-4 mb-8">
          {["all", "pending", "accepted", "declined"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-1 rounded-full text-sm font-semibold transition ${
                filter === type
                  ? "bg-green-700 text-white"
                  : "bg-white text-gray-800 border"
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-center text-gray-500 text-lg">Loading...</div>
        ) : filtered.length === 0 ? (
          <div className="text-center text-gray-500 text-lg">
            No notifications found.
          </div>
        ) : (
          <ul className="space-y-6">
            {filtered.map((notif) => (
              <li
                key={notif._id}
                className="bg-white border border-gray-200 rounded-2xl shadow p-6 transition"
              >
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-green-700">
                      {notif.equipment?.name || "Equipment"}
                    </h3>
                    <p className="text-sm font-medium text-gray-700">
                      {notif.name}
                    </p>
                  </div>
                  <span
                    className={`px-3 py-1 text-xs rounded-full font-medium w-fit
                      ${
                        notif.status === "accepted"
                          ? "bg-green-100 text-green-700"
                          : notif.status === "declined"
                          ? "bg-red-100 text-red-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                  >
                    {notif.status || "pending"}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-700 mb-4">
                  <p>
                    <HiOutlineMail className="inline mr-1" />{" "}
                    <span className="font-semibold">Full Name:</span>{" "}
                    {notif.user.fullName}
                  </p>
                  <p>
                    <HiOutlineMail className="inline mr-1" />{" "}
                    <span className="font-semibold">Email:</span>{" "}
                    {notif.user.email}
                  </p>
                  <p>
                    <AiOutlineClockCircle className="inline mr-1" />{" "}
                    <span className="font-semibold">Requested:</span>{" "}
                    {notif.requestedDate}
                  </p>
                  <p>
                    <AiOutlineClockCircle className="inline mr-1" />{" "}
                    <span className="font-semibold">Submitted:</span>{" "}
                    {formatDistanceToNow(new Date(notif.createdAt))} ago
                  </p>
                </div>

                {notif.status === "pending" && (
                  <div className="flex flex-col sm:flex-row gap-4 justify-end">
                    <button
                      onClick={() => handleDecline(notif._id)}
                      className="flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-red-500 hover:bg-red-600 text-white text-sm font-semibold shadow"
                    >
                      <FiXCircle className="text-lg" /> Decline
                    </button>
                    <button
                      onClick={() => handleAccept(notif._id)}
                      className="flex items-center justify-center gap-2 px-5 py-2 rounded-full bg-green-600 hover:bg-green-700 text-white text-sm font-semibold shadow"
                    >
                      <FiCheckCircle className="text-lg" /> Accept
                    </button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Notifications;
