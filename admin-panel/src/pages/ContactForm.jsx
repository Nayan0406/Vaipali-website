import React, { useEffect, useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get("https://vaipali-website-backend.vercel.app/api/contacts")
      .then(res => setMessages(res.data.contacts))
      .catch(err => console.error("Error fetching contacts:", err));
  }, []);

  return (
    <div className="p-4 text-white">
      <h2 className="text-xl font-bold mb-4 flex justify-center">Contact Messages</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-neutral-800 text-left border border-gray-600 text-sm">
          <thead>
            <tr className="bg-neutral-700 text-white">
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Phone</th>
              <th className="py-2 px-4 border-b">Message</th>
              <th className="py-2 px-4 border-b">Date</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((msg) => (
              <tr key={msg._id} className="border-b border-gray-700">
                <td className="py-2 px-4">{msg.firstName} {msg.lastName}</td>
                <td className="py-2 px-4">{msg.email}</td>
                <td className="py-2 px-4">{msg.phone}</td>
                <td className="py-2 px-4">{msg.message}</td>
                <td className="py-2 px-4">{new Date(msg.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactForm;
