import React from 'react';

const ProductSection = () => {
    return (
        <section className="px-6 py-12 md:py-20">
            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
                {/* Text Content */}
                <div className="md:w-1/2 text-left">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Product</h2>
                    <p className="text-white leading-relaxed mb-4">
                        TARS Technologies consists of highly skilled enthusiasts who dream of making the world an intelligent and fulfilled place by empowering organizations to gain a competitive edge. Loaded with information technology tools, techniques, and a skilled workforce, we provide customized solutions for all your business processes.
                    </p>
                    <p className="text-white leading-relaxed mb-4">
                        Our proficiency lies in developing revolutionary web services for you to meet the challenges of tomorrow's information age. TARS Tech derives its stronghold in providing IT training and development with services.
                    </p>
                    <p className="text-white leading-relaxed">
                        We want to provide simple IT solutions to clients. We understand the client's requirements, analyse it and provide the best IT solutions.
                    </p>
                </div>

                {/* Image Content */}
                <div className="md:w-1/2 flex justify-center">
                    <img
                        src="/case.png"
                        alt="Illustration"
                        className="w-full max-w-md md:max-w-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default ProductSection;
