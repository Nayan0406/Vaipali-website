import React, { useEffect, useState } from "react";
import axios from "axios";

const SubscriptionsForm = () => {
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    const fetchSubscriptions = async () => {
      try {
        const res = await axios.get("https://vaipali-website-backend.vercel.app/api/subscriptions");
        setSubscriptions(res.data.subscriptions);
      } catch (err) {
        console.error("Error fetching subscriptions", err);
      }
    };

    fetchSubscriptions();
  }, []);

  return (
    <div className="p-4 sm:p-6 text-white">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center sm:text-left">All Subscriptions</h2>

      {/* Responsive Table Wrapper */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-neutral-800 text-left border border-gray-600 text-sm sm:text-base">
          <thead>
            <tr className="bg-neutral-700 text-white">
              <th className="py-2 px-4 border-b whitespace-nowrap">First Name</th>
              <th className="py-2 px-4 border-b whitespace-nowrap">Last Name</th>
              <th className="py-2 px-4 border-b whitespace-nowrap">Email</th>
              <th className="py-2 px-4 border-b whitespace-nowrap">Date</th>
            </tr>
          </thead>
          <tbody>
            {subscriptions.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-400">
                  No subscriptions found.
                </td>
              </tr>
            ) : (
              subscriptions.map((sub) => (
                <tr key={sub._id} className="border-b border-gray-700 hover:bg-neutral-700 transition">
                  <td className="py-2 px-4 whitespace-nowrap">{sub.firstName}</td>
                  <td className="py-2 px-4 whitespace-nowrap">{sub.lastName}</td>
                  <td className="py-2 px-4 whitespace-nowrap break-all">{sub.email}</td>
                  <td className="py-2 px-4 whitespace-nowrap">{new Date(sub.createdAt).toLocaleString()}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SubscriptionsForm;
