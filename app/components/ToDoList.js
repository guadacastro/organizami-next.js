// components/ToDoList.js
'use client'
import { useState } from 'react';
import TaskList from './TaskList';
import { Inter } from 'next/font/google'
import React from 'react'
import { X } from 'lucide-react'

const inter = Inter({ subsets: ['latin'] })

function ToDoList({ id, onDelete }) {
  const [title, setTitle] = useState(''); // To store the final title
  const [isEditing, setIsEditing] = useState(false); // To track if the title is being edited
  const [newTitle, setNewTitle] = useState(''); // To track the title input value while editing

  function changeTitle() {
    if (isEditing) {
      return (
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              setIsEditing(false); // Exit edit mode
              setTitle(newTitle); // Set the new title
            }
          }}
          className="text-xl sm:text-2xl md:text-3xl font-bold text-black bg-transparent border-b border-black focus:outline-none text-left w-full"
          autoFocus
        />
      );
    }
  }

  return (
    <div className="w-full bg-gray-100">
      <div className={`w-full rounded-lg shadow-lg bg-white p-10 ${inter.className}`}>
        <div className="w-full mb-4 sm:mb-6 flex justify-between">
          {isEditing ? (
            changeTitle() // Show the input if in editing mode
          ) : (
            <h1
              className="text-xl sm:text-2xl md:text-3xl font-bold text-black cursor-pointer text-center break-words "
              onClick={() => setIsEditing(true)} // Enter edit mode
            >
              {title || 'Click to edit title'}
            </h1>
          )}
            <button
              onClick={() => onDelete(id)}
              className='top-2 right-2 text-red-800 font-bold w-6 h-6 rounded-full flex items-center justify-center text-sm'
            >
            <X size={20} />
          </button>
        </div>
        <TaskList 
          initialTasks={[]} 
          onUpdateTasks={(updatedTasks) => {
            // Handle the updated tasks, e.g., save to state or send to a server
            console.log(updatedTasks);
          }} 
        />
      </div>
    </div>
  );
}

export default ToDoList;
