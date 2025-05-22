import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Book, HeartHandshake, Mic, Languages } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-amber-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-orange-600 hover:text-orange-700">
            <ArrowLeft size={16} className="mr-1" />
            <span>Back to home</span>
          </Link>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">About This Project</h1>
            
            <p className="text-gray-700 mb-8 leading-relaxed">
              This website aims to provide sacred texts in both Hindi and Gujarati languages, 
              with an audio feature that allows users to listen to the texts being read aloud.
              The project was created with devotion to preserve and share these important spiritual works.
            </p>
            
            <h2 className="text-xl font-bold text-gray-800 mb-4">Features</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-full text-orange-600 mr-4">
                  <Book size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Sacred Texts Collection</h3>
                  <p className="text-gray-600">Access to important religious texts like Hanuman Chalisa, Shiv Tandav Stotram, and more.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-full text-orange-600 mr-4">
                  <Languages size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Bilingual Support</h3>
                  <p className="text-gray-600">All texts are available in both Hindi and Gujarati languages.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-full text-orange-600 mr-4">
                  <Mic size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Audio Reading</h3>
                  <p className="text-gray-600">Listen to the texts being read aloud with our built-in audio player.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-full text-orange-600 mr-4">
                  <HeartHandshake size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-1">Created with Devotion</h3>
                  <p className="text-gray-600">This project was created with respect and reverence for these sacred texts.</p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6">
              <p className="text-gray-500 text-sm">
                If you have any suggestions or feedback, please feel free to reach out. 
                This is an ongoing project and we are committed to improving and expanding our collection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;