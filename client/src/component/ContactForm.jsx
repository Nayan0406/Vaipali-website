import React, { useState } from 'react';
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstName, lastName, email, phone, message } = formData;

    if (!firstName || !lastName || !email || !phone || !message) {
      alert("Please fill in all fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (phone.length < 10 || !/^\d+$/.test(phone)) {
      alert("Please enter a valid phone number (at least 10 digits).");
      return;
    }

    try {
      const res = await axios.post("https://vaipali-website-backend.vercel.app/api/contacts", formData);
      console.log("Form submitted:", res.data);
      alert("Message sent successfully!");
      setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
    } catch (err) {
      console.error("Submission error:", err);
      alert("Something went wrong!");
    }
  };



  return (
    <div className="min-h-screen text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            "Get in Touch"
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Reach out to us today—our team is here to collaborate, innovate, and help you
            achieve your digital goals.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center bg-gray-700 rounded-2xl ml0.5">
          {/* Left Side - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden ">
              <img
                src="/person-image.png"
                alt="Person wearing VR headset in neon lighting"
                className="pl-5 pt-5 pb-5 pr-5"
              />

            </div>
          </div>

          {/* Right Side - Form */}
          <div className="order-1 lg:order-2">
            <div className="space-y-3">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 mt-4">
                  Let's Connect Constellations
                </h2>
                <p className="text-gray-400 text-base md:text-lg pb-2">
                  "Collaboration is the key to success. Contact us to begin your journey."
                </p>
              </div>

              <div className="space-y-6">
                <form onSubmit={handleSubmit}>
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mr-7">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      id="firstname"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-500 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300 text-white placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      id='lastname'
                      placeholder="Last Name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-500 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300 text-white placeholder-gray-400"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className='mr-7'>
                  <input
                    type="email"
                    name="email"
                    id='email'
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-500 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300 text-white placeholder-gray-400"
                  />
                </div>

                {/* Phone */}
                <div className='mr-7'>
                  <input
                    type="tel"
                    name="phone"
                    id='phone'
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-500 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300 text-white placeholder-gray-400"
                  />
                </div>

                {/* Message */}
                <div className='mr-7'>
                  <textarea
                    name="message"
                    id='message'
                    placeholder="Message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-500 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all duration-300 text-white placeholder-gray-400 resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className='pb-4 pr-7 '>
                  <button
                    type="submit"
                    className="w-full px-3 py-2 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white font-semibold rounded-lg hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <span>Send it to the</span>
                    <img src="/logo.png" alt="" />
                    <span>Vaipali</span>
                  </button>
                </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;