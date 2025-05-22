import React from 'react';
import { modules } from '../data/modules';
import ModuleCard from '../components/ModuleCard';
import { BookOpenText } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="bg-amber-50 min-h-screen">
      <div className="relative bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2846501/pexels-photo-2846501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              धार्मिक सन्दर्भ / ધાર્મિક સંદર્ભ
            </h1>
            <p className="text-lg md:text-xl text-amber-100 mb-8">
              Explore sacred texts in Hindi and Gujarati with audio reading functionality
            </p>
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-amber-50 border border-white/30">
              <BookOpenText size={20} className="mr-2" />
              <span>Begin your spiritual journey</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
          Sacred Texts Collection
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map(module => (
            <ModuleCard key={module.id} module={module} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;