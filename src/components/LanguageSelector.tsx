import React from 'react';
import { Globe as GlobeHemisphereWest } from 'lucide-react';

interface LanguageSelectorProps {
  language: 'hindi' | 'gujarati';
  setLanguage: (language: 'hindi' | 'gujarati') => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ language, setLanguage }) => {
  return (
    <div className="inline-flex items-center bg-white rounded-lg overflow-hidden border border-gray-300 shadow-sm">
      <div className="flex items-center justify-center bg-gray-50 px-3 py-2 text-sm text-gray-500">
        <GlobeHemisphereWest size={16} className="mr-2" />
        <span>Language</span>
      </div>
      <button
        className={`px-4 py-2 text-sm font-medium ${
          language === 'hindi' 
            ? 'bg-orange-100 text-orange-700'
            : 'bg-white text-gray-700 hover:bg-gray-50'
        } transition-colors`}
        onClick={() => setLanguage('hindi')}
      >
        हिंदी
      </button>
      <button
        className={`px-4 py-2 text-sm font-medium ${
          language === 'gujarati' 
            ? 'bg-orange-100 text-orange-700'
            : 'bg-white text-gray-700 hover:bg-gray-50'
        } transition-colors`}
        onClick={() => setLanguage('gujarati')}
      >
        ગુજરાતી
      </button>
    </div>
  );
};

export default LanguageSelector;