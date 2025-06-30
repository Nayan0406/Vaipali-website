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
    <div className="p-6 text-white">
      <h2 className="text-2xl font-bold mb-4">All Subscriptions</h2>
      <table className="min-w-full bg-neutral-800 text-left border border-gray-600">
        <thead>
          <tr className="bg-neutral-700 text-white">
            <th className="py-2 px-4 border-b">First Name</th>
            <th className="py-2 px-4 border-b">Last Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Date</th>
          </tr>
        </thead>
        <tbody>
          {subscriptions.map((sub) => (
            <tr key={sub._id} className="border-b border-gray-700">
              <td className="py-2 px-4">{sub.firstName}</td>
              <td className="py-2 px-4">{sub.lastName}</td>
              <td className="py-2 px-4">{sub.email}</td>
              <td className="py-2 px-4">{new Date(sub.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SubscriptionsForm;
