import React from "react";

const faqs = [
  {
    icon: <img src="/01.png" alt="01" className="w-8 h-8 md:w-10 md:h-10" />,
    question: "How can I stay informed about Vaipali’s latest updates and events?",
    answer:
      "You can subscribe to our newsletter, follow us on our social media channels, and regularly check our website’s News & Events section for the latest information.",
    borderColor: "border-b border-[#d59cff]",
  },
  {
    icon: <img src="/02.png" alt="02" className="w-8 h-8 md:w-10 md:h-10" />,
    question: "Where can I find information about upcoming events hosted by Vaipali?",
    answer:
      "Details about our upcoming events, webinars, and workshops are posted on our website’s Events page and announced through our social media platforms.",
    borderColor: "border-b border-[#f8b88b]",
  },
  {
    icon: <img src="/03.png" alt="03" className="w-8 h-8 md:w-10 md:h-10" />,
    question: "How can I connect with Vaipali on social media?",
    answer:
      "You can follow us on platforms like LinkedIn, Twitter, and Facebook to receive real-time updates and engage with our community.",
    borderColor: "border-b border-[#826ff5]",
  },
  {
    icon: <img src="/04.png" alt="04" className="w-8 h-8 md:w-10 md:h-10" />,
    question: "Is there a blog where I can read about Vaipali’s insights and industry news?",
    answer:
      "Absolutely! Our blog features articles on industry trends, case studies, and expert opinions. Visit our website’s Blog section to explore.",
    borderColor: "border-b border-[#dfb2ff]",
  },
];

const FAQSection = () => {
  return (
    <section className="bg-gradient-to-r bg-[#0f0f11] text-white px-4 py-16">
      <div className="max-w-5xl mx-auto text-center mb-12 px-2">
        <h2 className="text-3xl md:text-4xl font-bold">Frequently asked</h2>
        <h3 className="text-3xl md:text-4xl font-semibold mt-2">Question ?</h3>
        <p className="text-gray-400 text-sm mt-4 max-w-xl mx-auto">
          “Delivering bespoke IT solutions, software consultancy, and development services to
          transform your ideas into impactful digital realities.”
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto px-2">
        {faqs.map((faq, index) => (
          <div key={index} className="flex items-start gap-4 sm:gap-6">
            <div className="pt-1 flex-shrink-0">{faq.icon}</div>
            <div className="flex-1">
              <h4 className="text-base md:text-lg font-semibold mb-2">{faq.question}</h4>
              <p className="text-sm text-gray-300 mb-3">{faq.answer}</p>
              <div className={`${faq.borderColor} w-full`}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
