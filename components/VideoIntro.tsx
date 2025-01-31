import { useState, useRef } from 'react';
import { PlayCircle, PauseCircle, Volume2, VolumeX, Maximize } from 'lucide-react';

interface VideoIntroProps {
  videoUrl: string;
  title?: string;
  posterUrl?: string;
}

export default function VideoIntro({ 
  videoUrl, 
  title = "Video Introduction",
  posterUrl = "/placeholder.svg?height=400&width=600" 
}: VideoIntroProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <div className="max-w-3xl mx-auto relative group">
      {/* Loading Overlay */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/10 rounded-lg">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      
      {/* Video Element */}
      <video
        ref={videoRef}
        className="w-full rounded-lg shadow-xl"
        poster={posterUrl}
        onLoadedData={() => setIsLoading(false)}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Custom Controls */}
      <div className="absolute inset-0 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b from-black/30 via-transparent to-black/30 rounded-lg">
        {/* Title Bar */}
        <div className="p-4">
          <h3 className="text-white text-lg font-semibold">{title}</h3>
        </div>

        {/* Center Play/Pause Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={togglePlay}
            className="transform hover:scale-110 transition-transform duration-200"
          >
            {isPlaying ? (
              <PauseCircle className="w-16 h-16 text-white" />
            ) : (
              <PlayCircle className="w-16 h-16 text-white" />
            )}
          </button>
        </div>

        {/* Bottom Controls */}
        <div className="p-4 flex items-center space-x-4">
          <button
            onClick={togglePlay}
            className="text-white hover:text-blue-400 transition-colors"
          >
            {isPlaying ? (
              <PauseCircle className="w-6 h-6" />
            ) : (
              <PlayCircle className="w-6 h-6" />
            )}
          </button>
          
          <button
            onClick={toggleMute}
            className="text-white hover:text-blue-400 transition-colors"
          >
            {isMuted ? (
              <VolumeX className="w-6 h-6" />
            ) : (
              <Volume2 className="w-6 h-6" />
            )}
          </button>
          
          <button
            onClick={toggleFullscreen}
            className="text-white hover:text-blue-400 transition-colors ml-auto"
          >
            <Maximize className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}