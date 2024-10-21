// components/ToDoList.js
'use client'
import { useState } from 'react';
import TaskList from './TaskList';

function ToDoList() {
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
          className="text-[2rem] font-bold text-black bg-transparent border-b border-black focus:outline-none text-center"
          autoFocus
        />
      );
    }
  }

  return (
    <div className='flex flex-col w-[50vw] rounded-lg justify-between items-center shadow-1 bg-white p-[1rem]'>
        <div >
          {isEditing ? (
            changeTitle() // Show the input if in editing mode
          ) : (
            <h1
              className="text-[2rem] font-bold text-black cursor-pointer text-center"
              onClick={() => setIsEditing(true)} // Enter edit mode
            >
              {title || 'Click to edit title'}
            </h1>
          )}
      </div>
      <TaskList 
        initialTasks={[]} 
        onUpdateTasks={(updatedTasks) => {
          // Handle the updated tasks, e.g., save to state or send to a server
          console.log(updatedTasks);
        }} 
      />
    </div>
  );
}

export default ToDoList;
