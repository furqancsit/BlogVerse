// components/Footer.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-neutral-800 text-gray-400 py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              



                    {/* Right: Copyright */}
                    <div className="text-sm mt-4 md:mt-0 text-center">
                        &copy; {new Date().getFullYear()} BlogVerse. All rights reserved.
                    </div>
                </div>
        </footer>
    );
};

export default Footer;
