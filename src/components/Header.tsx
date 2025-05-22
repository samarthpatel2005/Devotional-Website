import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HelpingHand as PrayingHands, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md relative">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 text-white hover:text-amber-200 transition-colors">
            <PrayingHands size={28} className="text-amber-200" />
            <span className="text-xl font-bold">BhaktiSaar</span>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-amber-200 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-white hover:text-amber-200 transition-colors">Home</Link>
            <Link to="/about" className="text-white hover:text-amber-200 transition-colors">About</Link>
          </nav>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="md:hidden absolute top-full left-0 right-0 bg-orange-600 shadow-lg z-50">
            <div className="flex flex-col py-2">
              <Link 
                to="/" 
                className="px-4 py-2 text-white hover:bg-orange-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="px-4 py-2 text-white hover:bg-orange-700 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;