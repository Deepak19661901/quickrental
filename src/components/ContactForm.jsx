import React from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ContactForm = () => {
    const { isDarkMode } = useTheme();

    const baseMapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62369.22146146938!2d76.6356898!3d12.31064575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf70381d572ef9%3A0x2b89ece8c0f8396d!2sMysuru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1734209527268!5m2!1sen!2sin";
    const mapUrl = `${baseMapUrl}&mode=${isDarkMode ? 'dark' : 'light'}`;

    return (
        <div id="contact" className={`${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} py-16`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Contact Us
                    </h2>
                    <p className={`mt-4 text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        Have questions? We're here to help! Reach out to us through any of our channels.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column - Contact Info & Map */}
                    <div className="space-y-6">
                        {/* Contact Info */}
                        <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 shadow-sm`}>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <MapPin className="h-5 w-5 text-blue-600" />
                                    <span className={`ml-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                        123 Tech Street, City, Country
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <Phone className="h-5 w-5 text-blue-600" />
                                    <span className={`ml-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                        +1 234 567 8900
                                    </span>
                                </div>
                                <div className="flex items-center">
                                    <Mail className="h-5 w-5 text-blue-600" />
                                    <span className={`ml-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                                        support@quickrent.com
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg overflow-hidden shadow-sm`}>
                            <iframe
                                src={mapUrl}
                                width="100%"
                                height="300"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                    {/* Right Column - Contact Form */}
                    <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 shadow-sm`}>
                        <form className="space-y-6">
                            <div>
                                <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'} mb-2`}>
                                    Name
                                </label>
                                <input
                                    type="text"
                                    className={`w-full px-4 py-2 rounded-md border ${isDarkMode
                                        ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500'
                                        : 'bg-white border-gray-300 focus:border-blue-500'
                                        } focus:ring-1 focus:ring-blue-500`}
                                />
                            </div>
                            <div>
                                <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'} mb-2`}>
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className={`w-full px-4 py-2 rounded-md border ${isDarkMode
                                        ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500'
                                        : 'bg-white border-gray-300 focus:border-blue-500'
                                        } focus:ring-1 focus:ring-blue-500`}
                                />
                            </div>
                            <div>
                                <label className={`block text-sm font-medium ${isDarkMode ? 'text-gray-200' : 'text-gray-700'} mb-2`}>
                                    Message
                                </label>
                                <textarea
                                    rows="5"
                                    className={`w-full px-4 py-2 rounded-md border ${isDarkMode
                                        ? 'bg-gray-700 border-gray-600 text-white focus:border-blue-500'
                                        : 'bg-white border-gray-300 focus:border-blue-500'
                                        } focus:ring-1 focus:ring-blue-500`}
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-md hover:bg-blue-700 transition duration-300"
                            >
                                <Send className="w-4 h-4" />
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;