import React from 'react';
import { Link } from 'react-router-dom';
import { Module } from '../types';

interface ModuleCardProps {
  module: Module;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ module }) => {
  return (
    <Link 
      to={`/module/${module.id}`}
      className="block group bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={module.imageUrl} 
          alt={module.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{module.title}</h3>
        <p className="text-gray-600">{module.description}</p>
      </div>
    </Link>
  );
};

export default ModuleCard;