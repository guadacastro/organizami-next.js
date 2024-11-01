// components/ToDoList.js
'use client'
import { useState, useEffect } from 'react';
import TaskList from './TaskList';
import React from 'react'
import { X } from 'lucide-react'
import Colors from './Colors';

function ToDoList({ id, onDelete }) {
  // Load initial states from localStorage or use defaults
  const [title, setTitle] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(`todolist-${id}-title`) || '';
    }
    return '';
  });
  
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  
  const [styles, setStyles] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedStyles = localStorage.getItem(`todolist-${id}-styles`);
      return savedStyles ? JSON.parse(savedStyles) : {
        background: 'bg-gradient-to-r from-gray-50 to-gray-100',
        text: 'text-black',
        checkbox: 'accent-gray-400',
        inputBg: 'bg-gray-100'
      };
    }
    return {
      background: 'bg-gradient-to-r from-gray-50 to-gray-100',
      text: 'text-black',
      checkbox: 'accent-gray-400',
      inputBg: 'bg-gray-100'
    };
  });

  // Save title and styles when they change
  useEffect(() => {
    localStorage.setItem(`todolist-${id}-title`, title);
  }, [title, id]);

  useEffect(() => {
    localStorage.setItem(`todolist-${id}-styles`, JSON.stringify(styles));
  }, [styles, id]);

  function changeTitle() {
    if (isEditing) {
      return (
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              setIsEditing(false);
              setTitle(newTitle);
            }
          }}
          className={`text-xl sm:text-2xl md:text-3xl font-poppins font-semibold border-none shadow-lg rounded-lg  py-[.5vh] px-[1vw] ${styles.text} ${styles.inputBg} border-b border-current focus:outline-none text-left w-full`}
          autoFocus
        />
      );
    }
  }

  const handleColorChange = (colorId) => {
    const colorMap = {
      'violet': {
        background: 'bg-gradient-to-br from-violet to-blue opacity-90',
        text: 'text-white',
        checkbox: 'accent-violet text-white checked:bg-white',
        inputBg: 'bg-white/5'
      },
      'blue': {
        background: 'bg-gradient-to-br from-blue to-lightBlue opacity-90',
        text: 'text-white',
        checkbox: 'accent-blue text-white checked:bg-white',
        inputBg: 'bg-white/5'
      },
      'orange': {
        background: 'bg-gradient-to-br from-orange to-lightOrange opacity-80',
        text: 'text-white',
        checkbox: 'accent-orange text-white checked:bg-white',
        inputBg: 'bg-white/5'
      },
      'pink': {
        background: 'bg-gradient-to-br from-pink to-violet opacity-80',
        text: 'text-white',
        checkbox: 'accent-pink text-white checked:bg-white',
        inputBg: 'bg-white/5'
      },
      'bone': {
        background: 'bg-gradient-to-br from-gray-50 to-gray-200 opacity-90',
        text: 'text-black',
        checkbox: 'accent-gray text-white checked:bg-white',
        inputBg: 'bg-white/5'
      },
      'black': {
        background: 'bg-gradient-to-br from-gray-800 to-black opacity-90',
        text: 'text-white',
        checkbox: 'accent-gray text-white checked:bg-white',
        inputBg: 'bg-white/5'
      }
    };

    setStyles(colorMap[colorId]);
  };

  return (
    <div className="w-full rounded-lg bg-gradient-to-br from-gray-50 to-gray-200 opacity-90">
      <div className={`w-full rounded-lg shadow-lg p-10 ${styles.background}`}>
        <Colors onColorChange={handleColorChange} />
        <div className="w-full mb-4 sm:mb-6 flex justify-between  items-center">
          {isEditing ? (
            changeTitle()
          ) : (
            <h1
              className={`text-xl sm:text-2xl md:text-3xl font-poppins font-semibold ${styles.text} cursor-pointer text-center break-words`}
              onClick={() => setIsEditing(true)}
            >
              {title || 'Click to edit title'}
            </h1>
          )}
          <button
            onClick={() => {
              localStorage.removeItem(`todolist-${id}-title`);
              localStorage.removeItem(`todolist-${id}-styles`);
              localStorage.removeItem(`todolist-${id}-tasks`);
              onDelete(id);
            }}
            className={`${styles.text} hover:opacity-75 transition-opacity`}
          >
            <X size={24} className='hover:scale-110 transition-transform duration-100 ' />
          </button>
        </div>
        <TaskList 
          initialTasks={[]} 
          onUpdateTasks={(updatedTasks) => {
            localStorage.setItem(`todolist-${id}-tasks`, JSON.stringify(updatedTasks));
          }}
          styles={styles}
          todoListId={id}
        />
      </div>
    </div>
  );
}

export default ToDoList;
