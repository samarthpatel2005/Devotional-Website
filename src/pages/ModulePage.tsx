import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { devotionalContents } from '../data/content';
import LanguageSelector from '../components/LanguageSelector';
import AudioPlayer from '../components/AudioPlayer';
import { ArrowLeft, Flame, Play, Pause } from 'lucide-react';

const ModulePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [language, setLanguage] = useState<'hindi' | 'gujarati'>('hindi');
  const [isPlaying, setIsPlaying] = useState(false);
  
  const content = devotionalContents.find(c => c.id === id);
  
  if (!content) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Content not found</h2>
        <Link to="/" className="text-orange-500 hover:text-orange-600">Return to home</Link>
      </div>
    );
  }
  
  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };
  
  return (
    <div className="bg-amber-50 min-h-screen">
      <div className="relative aspect-video lg:aspect-[3/1] overflow-hidden">
        <img 
          src={content.imageUrl} 
          alt={content.title}
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{content.title}</h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">{content.description}</p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <Link to="/" className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4 md:mb-0">
            <ArrowLeft size={16} className="mr-1" />
            <span>Back to home</span>
          </Link>
          
          <LanguageSelector language={language} setLanguage={setLanguage} />
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden mb-24">
          {content.sections.map(section => (
            <div key={section.id} className="p-8 border-b border-gray-100 last:border-b-0">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Flame size={24} className="text-orange-500 mr-2" />
                {section.title}
              </h2>
              
              <div className="space-y-4 text-lg leading-relaxed">
                {section.content[language].map((line, index) => (
                  <p 
                    key={index} 
                    className="text-gray-700"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {content.audioUrl && (
          <button
            onClick={handlePlayPause}
            className="fixed right-4 bottom-20 z-20 bg-orange-500 text-white hover:bg-orange-600 transition-colors duration-300 rounded-full p-3 shadow-lg"
            aria-label={isPlaying ? "Pause" : "Listen"}
          >
            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
          </button>
        )}
      </div>
      
      {content.audioUrl && (
        <AudioPlayer 
          audioUrl={content.audioUrl}
          isPlaying={isPlaying} 
          onPlayPause={handlePlayPause} 
        />
      )}
    </div>
  );
};

export default ModulePage;