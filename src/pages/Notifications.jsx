import React from "react";
import AnimatedBackground from "../components/common/AnimatedBackground";

const notifications = [
  {
    id: 1,
    message: "Your order has been shipped.",
    dateTime: "2024-07-01T10:30:00Z", // Example date and time format
    read: false,
  },
  {
    id: 2,
    message: "New products added to our store!",
    dateTime: "2024-06-30T15:45:00Z",
    read: true,
  },
  {
    id: 3,
    message: "Special promotion this weekend only.",
    dateTime: "2024-06-29T09:00:00Z",
    read: false,
  },
];

export default function Notifications() {
  const handleMarkAsRead = (id) => {
    // Implement marking notification as read logic
    console.log(`Mark notification ${id} as read`);
    // You can update state or perform API calls here
  };

  return (
    <>
      <AnimatedBackground />
      <div className="flex flex-col items-center justify-center pt-14 p-2 relative">
        <div className=" bg-transparent backdrop-blur shadow-md rounded-lg p-2 md:p-10 w-full md:w-2/3 lg:w-1/2">
          <h1 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-4 text-center">
            Notifications
          </h1>
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className={`flex flex-col ${
                notification.read ? "bg-slate-200" : "bg-slate-300"
              } border border-gray-200 rounded-lg mb-4 p-4`}
            >
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={notification.read}
                  onChange={() => handleMarkAsRead(notification.id)}
                />
                <span className="text-lg md:text-xl">
                  {notification.message}
                </span>
              </label>
              <div className="text-sm text-gray-600 mt-2">
                <p className="font-semibold">
                  
                  {new Date(notification.dateTime).toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
