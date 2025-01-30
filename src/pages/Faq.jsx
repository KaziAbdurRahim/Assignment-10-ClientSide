import React from 'react';

const Faq = () => {
    return (
        <section className="py-10 bg-gray-900 text-white">
            <div className="max-w-4xl mx-auto px-4">
                {/* Section Header */}
                <h2 className="text-4xl font-bold text-center text-green-500 mb-8">
                    Gamer's FAQ
                </h2>
                <p className="text-center text-lg text-gray-400 mb-10">
                    Got questions about our gaming platform? We've got the answers!
                </p>
                
                {/* FAQ Accordion */}
                <div className="space-y-4">
                    {/* Question 1 */}
                    <div className="collapse collapse-arrow bg-gray-800">
                        <input type="radio" name="faq-accordion" defaultChecked />
                        <div className="collapse-title text-lg font-medium">
                            What is the subscription cost?
                        </div>
                        <div className="collapse-content">
                            <p>
                                Our platform offers a variety of subscription plans starting at just $9.99/month. Choose the plan that fits your gaming needs!
                            </p>
                        </div>
                    </div>

                    {/* Question 2 */}
                    <div className="collapse collapse-arrow bg-gray-800">
                        <input type="radio" name="faq-accordion" />
                        <div className="collapse-title text-lg font-medium">
                            Can I play games offline?
                        </div>
                        <div className="collapse-content">
                            <p>
                                Yes! With our premium plan, you can download games and play them offline anytime, anywhere.
                            </p>
                        </div>
                    </div>

                    {/* Question 3 */}
                    <div className="collapse collapse-arrow bg-gray-800">
                        <input type="radio" name="faq-accordion" />
                        <div className="collapse-title text-lg font-medium">
                            Are there any ads?
                        </div>
                        <div className="collapse-content">
                            <p>
                                Our basic plan includes limited ads, but our premium and family plans offer an ad-free experience for uninterrupted gaming.
                            </p>
                        </div>
                    </div>

                    {/* Question 4 */}
                    <div className="collapse collapse-arrow bg-gray-800">
                        <input type="radio" name="faq-accordion" />
                        <div className="collapse-title text-lg font-medium">
                            How many devices can I play on simultaneously?
                        </div>
                        <div className="collapse-content">
                            <p>
                                You can play on up to 4 devices simultaneously with our family plan. The basic and premium plans allow 1 and 2 devices, respectively.
                            </p>
                        </div>
                    </div>

                    {/* Question 5 */}
                    <div className="collapse collapse-arrow bg-gray-800">
                        <input type="radio" name="faq-accordion" />
                        <div className="collapse-title text-lg font-medium">
                            Do you have a free trial?
                        </div>
                        <div className="collapse-content">
                            <p>
                                Absolutely! We offer a 7-day free trial for all new users to explore our platform and enjoy unlimited gaming.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;
