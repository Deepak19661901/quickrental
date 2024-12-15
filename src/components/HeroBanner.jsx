import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { ArrowRight, Star, Clock, Shield } from 'lucide-react';

const HeroBanner = () => {
    const { isDarkMode } = useTheme();

    const features = [
        { icon: Star, text: "Premium Quality Gadgets" },
        { icon: Clock, text: "24/7 Support Available" },
        { icon: Shield, text: "Insured Equipment" },
    ];

    return (
        <div className={`relative overflow-hidden ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
            {/* Background Pattern */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 transform -skew-y-6"></div>
                {isDarkMode && (
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/50"></div>
                )}
            </div>

            {/* Main Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Text Content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <div className={`inline-block ${isDarkMode ? 'bg-blue-500/10' : 'bg-blue-100'} rounded-full px-4 py-1`}>
                                <span className="text-blue-600 font-semibold">New Launch 🚀</span>
                            </div>
                            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                Rent Premium
                                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Gadgets</span>
                                <br />On Demand
                            </h1>
                            <p className={`text-lg md:text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                Access the latest tech without the commitment. From laptops to cameras,
                                we've got your tech needs covered.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition duration-300 flex items-center group">
                                Explore Rentals
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} px-8 py-3 rounded-lg border border-gray-300 hover:border-blue-500 transition duration-300`}>
                                View Pricing
                            </button>
                        </div>

                        {/* Features List */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className={`flex items-center gap-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
                                >
                                    <feature.icon className="w-5 h-5 text-blue-600" />
                                    <span className="text-sm font-medium">{feature.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Image */}
                    <div className="relative">
                        <div className={`relative rounded-2xl overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-4 shadow-xl`}>
                            <img
                                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1000"
                                alt="Premium Gadgets Collection"
                                className="w-full h-full object-cover rounded-lg"
                            />
                            {/* Floating Stats Card */}
                            <div className={`absolute bottom-8 left-8 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-4 rounded-lg shadow-lg`}>
                                <div className="flex items-center gap-4">
                                    <div className="text-center">
                                        <div className="text-blue-600 font-bold text-2xl">500+</div>
                                        <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Products</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-blue-600 font-bold text-2xl">24/7</div>
                                        <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Support</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Decorative Elements */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroBanner;