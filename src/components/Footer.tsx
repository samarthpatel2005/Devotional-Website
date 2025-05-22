import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-center md:text-left">
              Built by Samarth
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <span>Made with</span>
            <Heart size={16} className="text-red-500 animate-pulse" fill="currentColor" />
            <span>and devotion</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;