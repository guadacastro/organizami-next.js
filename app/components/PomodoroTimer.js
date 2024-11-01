"use client"
import { useState, useEffect } from 'react';
import { FaPlay, FaPause, FaRedo } from 'react-icons/fa';

function PomodoroTimer() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTime = localStorage.getItem('pomodoroTimeLeft');
    const savedTimestamp = localStorage.getItem('pomodoroLastTimestamp');
    const savedRunning = localStorage.getItem('pomodoroIsRunning');
    const savedBreak = localStorage.getItem('pomodoroIsBreak');

    if (savedTime && savedTimestamp && savedRunning === 'true') {
      const elapsed = Math.floor((Date.now() - parseInt(savedTimestamp)) / 1000);
      const remainingTime = Math.max(0, parseInt(savedTime) - elapsed);
      setTimeLeft(remainingTime);
      setIsRunning(true);
    } else if (savedTime) {
      setTimeLeft(parseInt(savedTime));
    }

    if (savedBreak) {
      setIsBreak(JSON.parse(savedBreak));
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('pomodoroTimeLeft', timeLeft.toString());
      localStorage.setItem('pomodoroIsRunning', JSON.stringify(isRunning));
      localStorage.setItem('pomodoroIsBreak', JSON.stringify(isBreak));
      
      if (isRunning) {
        localStorage.setItem('pomodoroLastTimestamp', Date.now().toString());
      }
    }
  }, [timeLeft, isRunning, isBreak, mounted]);

  useEffect(() => {
    let interval;
    
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prevTime => {
          const newTime = prevTime - 1;
          if (newTime === 0) {
            setIsRunning(false);
            setIsBreak(!isBreak);
            return isBreak ? 25 * 60 : 5 * 60;
          }
          return newTime;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, isBreak]);

  const toggleTimer = () => {
    setIsRunning(prev => !prev);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setIsBreak(false);
    setTimeLeft(25 * 60);
    localStorage.removeItem('pomodoroTimeLeft');
    localStorage.removeItem('pomodoroIsRunning');
    localStorage.removeItem('pomodoroIsBreak');
    localStorage.removeItem('pomodoroLastTimestamp');
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  if (!mounted) {
    return (
      <div className="flex items-center gap-2 bg-[#FFF8F0] rounded-lg px-3 py-1.5 shadow-sm border border-[#FF9130]/20">
        <div className="text-sm font-semibold min-w-[60px] text-[#FF9130] opacity-0">
          00:00
        </div>
        <div className="flex gap-1.5 invisible">
          {/* Buttons placeholder */}
          <div className="w-7 h-7" />
          <div className="w-7 h-7" />
        </div>
        <div className="text-xs font-medium text-[#FF9130] invisible">
          Work
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 bg-[#FFF8F0] rounded-lg px-3 py-1.5 shadow-sm border border-[#FF9130]/20">
      <div className="text-sm font-semibold min-w-[60px] text-[#FF9130]">
        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
      </div>
      <div className="flex gap-1.5">
        <button 
          onClick={toggleTimer}
          className="flex items-center justify-center w-7 h-7 rounded-full bg-orange text-white hover:bg-[#FF7B00] transition-colors"
          aria-label={isRunning ? 'Pause' : 'Play'}
        >
          {isRunning ? 
            <FaPause className="w-3 h-3" /> : 
            <FaPlay className="w-3 h-3 ml-0.5" />
          }
        </button>
        <button 
          onClick={resetTimer}
          className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-100 text-[#FF9130] hover:bg-gray-200 transition-colors"
          aria-label="Reset"
        >
          <FaRedo className="w-3 h-3" />
        </button>
      </div>
      <div className="text-xs font-medium text-[#FF9130]">
        {isBreak ? 'Break' : 'Work'}
      </div>
    </div>
  );
}

export default PomodoroTimer; 