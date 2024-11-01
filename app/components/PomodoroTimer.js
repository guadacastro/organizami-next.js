"use client"
import { useState, useEffect } from 'react';
import { FaPlay, FaPause, FaRedo } from 'react-icons/fa';

function PomodoroTimer() {
  const [timeLeft, setTimeLeft] = useState(() => {
    const saved = localStorage.getItem('pomodoroTimeLeft');
    return saved ? parseInt(saved) : 25 * 60;
  });
  
  const [isRunning, setIsRunning] = useState(() => {
    const saved = localStorage.getItem('pomodoroIsRunning');
    return saved ? JSON.parse(saved) : false;
  });
  
  const [isBreak, setIsBreak] = useState(() => {
    const saved = localStorage.getItem('pomodoroIsBreak');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('pomodoroTimeLeft', timeLeft.toString());
    localStorage.setItem('pomodoroIsRunning', JSON.stringify(isRunning));
    localStorage.setItem('pomodoroIsBreak', JSON.stringify(isBreak));
  }, [timeLeft, isRunning, isBreak]);

  useEffect(() => {
    let interval;
    
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => {
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
    setIsRunning((prev) => !prev);
    if (!isRunning) {
      localStorage.setItem('pomodoroLastTimestamp', Date.now().toString());
    }
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