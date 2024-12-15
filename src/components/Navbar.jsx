// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Menu, X, Sun, Moon, User } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showSignUpModal, setShowSignUpModal] = useState(false);
    const { isDarkMode, toggleTheme } = useTheme();

    const navLinks = [
        { name: 'Features', href: '#features' },
        { name: 'Gadgets', href: '#gadgets' },
        { name: 'Contact', href: '#contact' }
    ];

    const SignUpModal = () => (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-lg w-96 relative`}>
                <button
                    onClick={() => setShowSignUpModal(false)}
                    className="absolute top-4 right-4"
                >
                    <X size={20} />
                </button>
                <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
                <form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Full Name</label>
                        <input
                            type="text"
                            className={`w-full p-2 rounded border ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'
                                }`}
                            placeholder="John Doe"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input
                            type="email"
                            className={`w-full p-2 rounded border ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'
                                }`}
                            placeholder="john@example.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Password</label>
                        <input
                            type="password"
                            className={`w-full p-2 rounded border ${isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'
                                }`}
                            placeholder="••••••••"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300"
                    >
                        Create Account
                    </button>
                </form>
            </div>
        </div>
    );

    return (
        <nav className={`fixed w-full ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
            } shadow-lg z-40`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <h1 className="text-2xl font-bold text-blue-600">QuickRent</h1>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-blue-600'
                                    } transition duration-300`}
                            >
                                {link.name}
                            </a>
                        ))}

                        {/* Sign Up Button */}
                        <button
                            onClick={() => setShowSignUpModal(true)}
                            className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
                        >
                            <User size={18} />
                            <span>Sign Up</span>
                        </button>

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className={`p-2 rounded-full ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                                } transition duration-300`}
                        >
                            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-4">
                        <button
                            onClick={toggleTheme}
                            className={`p-2 rounded-full ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                                } transition duration-300`}
                        >
                            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`p-2 rounded-md ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                                }`}
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden">
                        <div className={`pt-2 pb-3 space-y-1 ${isDarkMode ? 'bg-gray-900' : 'bg-white'
                            }`}>
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className={`block px-3 py-2 ${isDarkMode
                                        ? 'text-gray-300 hover:text-white hover:bg-gray-700'
                                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                                        } rounded-md transition duration-300`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <button
                                onClick={() => {
                                    setIsOpen(false);
                                    setShowSignUpModal(true);
                                }}
                                className="w-full text-left px-3 py-2 text-blue-600 hover:bg-gray-100 rounded-md transition duration-300"
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Sign Up Modal */}
            {showSignUpModal && <SignUpModal />}
        </nav>
    );
};

export default Navbar;
