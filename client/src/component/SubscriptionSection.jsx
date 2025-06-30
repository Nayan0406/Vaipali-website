import React, { useState } from 'react';
import axios from "axios";

const SubscriptionSection = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post("https://vaipali-website-backend.vercel.app/api/subscriptions", formData); 
      console.log("Submitted successfully:", res.data);
      alert("Subscribed successfully!");
      setFormData({ firstName: "", lastName: "", email: "" });
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong!");
    }
  };


  return (
    <div className="min-h-screen text-white flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Left Side - Form */}
          <div className="order-2 lg:order-1">
            <div className="bg-neutral-800  backdrop-blur-sm p-6 sm:p-8 lg:p-10">
              <h2 className="text-2xl sm:text-3xl font-medium mb-6 sm:mb-8">
                Subscription
              </h2>

              <div className="space-y-4 sm:space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <div className="block text-sm font-medium text-gray-300 mb-2">
                      First Name
                    </div>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="first name"
                      className="w-full px-4 py-3 bg-transparent border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                    />
                  </div>

                  <div>
                    <div className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name
                    </div>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="last name"
                      className="w-full px-4 py-3 bg-transparent border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <div className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="email"
                    className="w-full px-4 py-3 bg-transparent border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                  />
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 cursor-pointer"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light leading-tight mb-6 sm:mb-8">
              Subscribe to
              <br />
              the Future
            </h1>

            <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed max-w-md mx-auto lg:mx-0">
              Be the first to know what's next in Web3. Subscribe to receive exclusive updates from Cubix — including product launches, platform upgrades, expert insights.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionSection;