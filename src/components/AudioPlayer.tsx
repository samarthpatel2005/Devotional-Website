import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface AudioPlayerProps {
  audioUrl: string;
  isPlaying: boolean;
  onPlayPause: () => void;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioUrl, isPlaying, onPlayPause }) => {
  const [muted, setMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  useEffect(() => {
    if (!audioUrl) return;
    
    audioRef.current = new Audio(audioUrl);
    audioRef.current.addEventListener('timeupdate', updateProgress);
    audioRef.current.addEventListener('ended', () => {
      onPlayPause();
      setProgress(0);
    });
    
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('timeupdate', updateProgress);
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [audioUrl]);

  useEffect(() => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = muted;
    }
  }, [muted]);

  const updateProgress = () => {
    if (audioRef.current) {
      const value = (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(value);
    }
  };

  const toggleMute = () => {
    setMuted(!muted);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 p-4 z-10">
      <div className="max-w-4xl mx-auto">
        <div className="relative w-full h-1 bg-gray-200 rounded-full mb-4">
          <div 
            className="absolute h-full bg-orange-500 rounded-full transition-all duration-300 ease-in-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={onPlayPause}
              className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white hover:bg-orange-600 transition-colors"
              aria-label={isPlaying ? "Pause" : "Play"}
              disabled={!audioUrl}
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
            </button>
            
            <button
              onClick={toggleMute}
              className="text-gray-600 hover:text-orange-500 transition-colors"
              aria-label={muted ? "Unmute" : "Mute"}
              disabled={!audioUrl}
            >
              {muted ? <VolumeX size={20} /> : <Volume2 size={20} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;