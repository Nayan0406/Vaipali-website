import React from 'react';

const BlogDetail = () => {
    return (
        <div className="bg-white text-black min-h-screen px-4 md:px-20 py-10">
            {/* Blog Banner Image */}
            <div className="w-full mb-8">
                <img
                    src="/blog.png"
                    alt=""
                    className="w-full max-h-[480px] object-cover "
                />
            </div>

            {/* Metadata */}
            <p className="text-gray-500 text-sm font-semibold mb-2">
                Tracy Willson <span className="mx-1">|</span> August 8, 2025 <span className="mx-1">|</span> 5 min
            </p>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-light mb-6">
                The Impact of Technology on the Workplace: How Technology is Changing
            </h1>

            {/* Section: Introduction */}
            <h2 className="text-2xl font-bold mb-2">Introduction</h2>
            <p className="text-lg text-gray-800 leading-relaxed">
                If your organization is not leveraging modern technology solutions today, it has likely already fallen behind when compared to your competition.

                That said, it’s never too late to begin your digital transformation journey, which in turn will cultivate a more technology-centric (and competitive) business model.

                As mentioned, we have seen a dramatic shift in consumer demands and expectations, and the impact of technology on the customer experience is more prevalent than ever before.

                Long gone are the days of consumers being content with a two- or three-day response time for a query such as a password reset.

                Today, a nearly instantaneous resolution is the norm and what you must be delivering to remain competitive. This is due largely in part to customer service channels such as social media, live chat, and email.

                Couple those support channels with technologies like AI, automation, and self-help resources, and your customers have the ability to choose their support preference for a quick and efficient resolution, leading to a better overall customer experience.

                When your customers are happy, they will continue doing business with you, and possibly even refer you to their community which increases profits.
            </p>
        </div>
    );
};

export default BlogDetail;
