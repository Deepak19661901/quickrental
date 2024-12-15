import React from 'react';
import { useTheme } from '../context/ThemeContext';

const GadgetList = () => {
    const { isDarkMode } = useTheme();

    const gadgets = [
        {
            category: 'Laptops',
            price: '49.99',
            image: 'https://plus.unsplash.com/premium_photo-1681702156223-ea59bfbf1065?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGFwdG9wfGVufDB8fDB8fHww',
            features: ['4K Display', '16GB RAM', '512GB SSD', 'Free Delivery'],
            comparison: {
                basic: { ram: '8GB', storage: '256GB', price: '39.99' },
                pro: { ram: '16GB', storage: '512GB', price: '49.99' },
                premium: { ram: '32GB', storage: '1TB', price: '69.99' }
            }
        },
        {
            category: 'Cameras',
            price: '39.99',
            image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D',
            features: ['4K Video', '24MP Sensor', 'Dual Card Slots', 'Free Delivery'],
            comparison: {
                basic: { sensor: '18MP', video: '1080p', price: '29.99' },
                pro: { sensor: '24MP', video: '4K', price: '39.99' },
                premium: { sensor: '45MP', video: '8K', price: '59.99' }
            }
        },
        {
            category: 'Gaming Consoles',
            price: '29.99',
            image: 'https://images.unsplash.com/photo-1700155007323-1e4f4e58d627?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdhbWluZyUyMGNvbnNvbGV8ZW58MHx8MHx8fDA%3D',
            features: ['4K Gaming', '1TB Storage', 'Wireless Controller', 'Free Delivery'],
            comparison: {
                basic: { storage: '500GB', controller: '1', price: '24.99' },
                pro: { storage: '1TB', controller: '2', price: '29.99' },
                premium: { storage: '2TB', controller: '2', price: '39.99' }
            }
        }
    ];

    return (
        <div id="gadgets" className={`py-12 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">Available Gadgets</h2>
                    <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
                        Choose from our premium selection of gadgets
                    </p>
                </div>

                {/* Images and Features */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    {gadgets.map((gadget) => (
                        <div key={gadget.category} className={`relative rounded-lg overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'
                            } shadow-xl transition-transform duration-300 hover:scale-105`}>
                            <div className="h-64 relative">
                                <img
                                    src={gadget.image}
                                    alt={gadget.category}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{gadget.category}</h3>
                                <p className="text-3xl font-bold text-blue-600 mb-4">
                                    ${gadget.price}<span className="text-sm">/day</span>
                                </p>
                                <ul className="space-y-2 mb-6">
                                    {gadget.features.map((feature, index) => (
                                        <li key={index} className="flex items-center">
                                            <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300">
                                    Rent Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Comparison Table */}
                <div className="mt-16">
                    <h3 className="text-2xl font-bold mb-6 text-center">Plan Comparison</h3>
                    <div className="overflow-x-auto">
                        <table className={`w-full ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg rounded-lg`}>
                            <thead>
                                <tr className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                                    <th className="px-6 py-3 text-left">Plan</th>
                                    <th className="px-6 py-3 text-left">Basic</th>
                                    <th className="px-6 py-3 text-left">Pro</th>
                                    <th className="px-6 py-3 text-left">Premium</th>
                                </tr>
                            </thead>
                            <tbody>
                                {gadgets.map((gadget) => (
                                    <React.Fragment key={gadget.category}>
                                        <tr className={`${isDarkMode ? 'border-gray-700' : 'border-gray-200'} border-t`}>
                                            <td className="px-6 py-4 font-medium">{gadget.category}</td>
                                            <td className="px-6 py-4">${gadget.comparison.basic.price}/day</td>
                                            <td className="px-6 py-4">${gadget.comparison.pro.price}/day</td>
                                            <td className="px-6 py-4">${gadget.comparison.premium.price}/day</td>
                                        </tr>
                                        <tr className={`${isDarkMode ? 'border-gray-700' : 'border-gray-200'} border-t`}>
                                            <td className="px-6 py-4 font-medium">Specs</td>
                                            <td className="px-6 py-4">
                                                {Object.entries(gadget.comparison.basic)
                                                    .filter(([key]) => key !== 'price')
                                                    .map(([key, value]) => (
                                                        <div key={key}>{key.toUpperCase()}: {value}</div>
                                                    ))}
                                            </td>
                                            <td className="px-6 py-4">
                                                {Object.entries(gadget.comparison.pro)
                                                    .filter(([key]) => key !== 'price')
                                                    .map(([key, value]) => (
                                                        <div key={key}>{key.toUpperCase()}: {value}</div>
                                                    ))}
                                            </td>
                                            <td className="px-6 py-4">
                                                {Object.entries(gadget.comparison.premium)
                                                    .filter(([key]) => key !== 'price')
                                                    .map(([key, value]) => (
                                                        <div key={key}>{key.toUpperCase()}: {value}</div>
                                                    ))}
                                            </td>
                                        </tr>
                                    </React.Fragment>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="mt-16 text-center">
                    <h3 className="text-2xl font-bold mb-4">Have a Gadget to Rent?</h3>
                    <p className="mb-6 text-gray-600 dark:text-gray-300">
                        List your gadget on our platform and start earning
                    </p>
                    <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition duration-300">
                        List Your Gadget
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GadgetList;