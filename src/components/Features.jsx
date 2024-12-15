import React from 'react';
import { Camera, Laptop, Gamepad } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const features = [
    {
        name: 'Wide Variety of Gadgets',
        description: 'Choose from our extensive collection of laptops, cameras, gaming consoles, and more.',
        icon: Camera,
    },
    {
        name: 'Affordable Pricing',
        description: 'Flexible rental plans that fit your budget and duration needs.',
        icon: Laptop,
    },
    {
        name: 'Quick Delivery',
        description: 'Fast and reliable delivery to your doorstep with proper handling.',
        icon: Gamepad,
    },
];

const Features = () => {
    const { isDarkMode } = useTheme();

    return (
        <div id="features" className={`py-12 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
                        Features
                    </h2>
                    <p className={`mt-2 text-3xl leading-8 font-extrabold tracking-tight ${isDarkMode ? 'text-white' : 'text-gray-900'
                        } sm:text-4xl`}>
                        Why Choose QuickRent?
                    </p>
                </div>

                <div className="mt-10">
                    <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative">
                                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                                </div>
                                <div className="ml-16">
                                    <h3 className={`text-lg leading-6 font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'
                                        }`}>
                                        {feature.name}
                                    </h3>
                                    <p className={`mt-2 text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-500'
                                        }`}>
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;