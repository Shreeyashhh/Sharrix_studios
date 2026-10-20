import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Disc, Volume2, VolumeX } from 'lucide-react';
import { TrackItem } from '../types';

interface AudioPlayerProps {
  track: TrackItem;
  isPlaying: boolean;
  onTogglePlay: () => void;
}

export const AudioPlayerComponent: React.FC<AudioPlayerProps> = ({
  track,
  isPlaying,
  onTogglePlay,
}) => {
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(180);
  const [isMuted, setIsMuted] = useState(false);
  
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const timerRef = useRef<any>(null);

  useEffect(() => {
    if (isPlaying) {
      startSynthAudio();
      timerRef.current = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= duration) {
            onTogglePlay();
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      stopSynthAudio();
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      stopSynthAudio();
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying]);

  useEffect(() => {
    setProgress((currentTime / duration) * 100);
  }, [currentTime, duration]);

  const startSynthAudio = () => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      
      audioCtxRef.current = new AudioCtx();
      const ctx = audioCtxRef.current;
      
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, ctx.currentTime);
      gain.gain.setValueAtTime(isMuted ? 0 : 0.05, ctx.currentTime);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      oscillatorRef.current = osc;
      gainNodeRef.current = gain;
    } catch (e) {
      console.log('Audio Context initialization fallback');
    }
  };

  const stopSynthAudio = () => {
    if (oscillatorRef.current) {
      try {
        oscillatorRef.current.stop();
      } catch (e) {}
    }
    if (audioCtxRef.current) {
      try {
        audioCtxRef.current.close();
      } catch (e) {}
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const newPercent = clickX / width;
    setCurrentTime(newPercent * duration);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (gainNodeRef.current && audioCtxRef.current) {
      gainNodeRef.current.gain.setValueAtTime(!isMuted ? 0 : 0.05, audioCtxRef.current.currentTime);
    }
  };

  return (
    <div className="bg-white border border-[#1C1917]/10 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center gap-8 shadow-xl">
      
      {/* Artwork */}
      <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-2xl overflow-hidden shrink-0 border border-[#1C1917]/10 shadow-md">
        <img
          src={track.coverImage}
          alt={track.title}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isPlaying ? 'scale-105 filter brightness-105' : 'scale-100'
          }`}
        />
        
        {/* Equalizer Visualizer Bars Overlay */}
        {isPlaying && (
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center gap-1.5 p-4">
            <span className="w-1.5 h-10 bg-[#FF5500] rounded-full animate-[pulse_0.6s_ease-in-out_infinite]" />
            <span className="w-1.5 h-16 bg-[#FF5500] rounded-full animate-[pulse_0.8s_ease-in-out_infinite_0.1s]" />
            <span className="w-1.5 h-12 bg-[#FF5500] rounded-full animate-[pulse_0.5s_ease-in-out_infinite_0.2s]" />
            <span className="w-1.5 h-8 bg-[#FF5500] rounded-full animate-[pulse_0.7s_ease-in-out_infinite_0.3s]" />
            <span className="w-1.5 h-14 bg-[#FF5500] rounded-full animate-[pulse_0.9s_ease-in-out_infinite_0.15s]" />
          </div>
        )}
      </div>

      {/* Track Info & Controls */}
      <div className="flex-1 w-full flex flex-col justify-between space-y-6">
        <div>
          <span className="inline-flex items-center gap-1.5 text-xs font-grotesk font-bold text-[#FF5500] uppercase tracking-wider">
            <Disc className="w-3.5 h-3.5 animate-spin-slow" />
            <span>SHARRIX FEATURED TRACK</span>
          </span>
          <h3 className="text-2xl sm:text-3xl font-grotesk font-bold text-[#1C1917] mt-1">
            {track.title}
          </h3>
          <p className="text-sm text-[#78716C] font-medium">{track.artist}</p>
        </div>

        {/* Controls & Scrubber */}
        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <button
              onClick={onTogglePlay}
              className="w-14 h-14 rounded-full bg-[#FF5500] hover:bg-[#E64A00] text-white flex items-center justify-center shadow-[0_4px_20px_rgba(255,85,0,0.35)] transition-transform hover:scale-105 active:scale-95 shrink-0"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? <Pause className="w-6 h-6 fill-white" /> : <Play className="w-6 h-6 fill-white translate-x-0.5" />}
            </button>

            <div className="flex-1 flex flex-col gap-1.5">
              <div
                onClick={handleSeek}
                className="w-full h-2 bg-[#1C1917]/10 hover:bg-[#1C1917]/20 rounded-full cursor-pointer overflow-hidden relative"
              >
                <div
                  className="h-full bg-gradient-to-r from-[#FF5500] to-[#FFA800] rounded-full transition-all duration-150"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex items-center justify-between text-xs font-mono text-[#78716C]">
                <span>{formatTime(currentTime)}</span>
                <span>{track.duration}</span>
              </div>
            </div>

            <button
              onClick={toggleMute}
              className="p-2 text-[#78716C] hover:text-[#1C1917] transition-colors"
            >
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};
