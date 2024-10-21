'use client';
import { useState } from 'react';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { arrayMove, SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { AlignJustify, X } from 'lucide-react';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// Task Component with Draggable functionality
const Task = ({ task, onTaskUpdate, onTaskDelete }) => {
  const [isEditingTask, setIsEditingTask] = useState(false);
  const [taskText, setTaskText] = useState(task.text);
  const [isCompleted, setIsCompleted] = useState(task.completed);

  const handleTaskKeyPress = (e) => {
    if (e.key === 'Enter') {
      setIsEditingTask(false);
      onTaskUpdate({ ...task, text: taskText });
    }
  };

  const handleCompletedChange = () => {
    const updatedTask = { ...task, completed: !isCompleted };
    setIsCompleted(!isCompleted);
    onTaskUpdate(updatedTask);
  };

  // Setup draggable using a handle
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`flex items-start my-3 gap-[1rem] ${inter.className}`}
    >
      <div className="flex items-center">
        {/* Draggable handle */}
        <div
          {...attributes}
          {...listeners}
          className="ml-2 cursor-move hover:text-orange"
        >
          <AlignJustify className='opacity-50 hover:opacity-100'/>
        </div>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={handleCompletedChange}
          className="ml-2 rounded-full h-5 w-5 text-orange-900 accent-violet"
        />
      </div>

      <div className="flex-grow min-w-0">
        {isEditingTask ? (
          <input
            type="text"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            onKeyPress={handleTaskKeyPress}
            className="border-b focus:outline-none w-full text-black pl-[1vw] text-xl"
            autoFocus
          />
        ) : (
          <p
            className={`cursor-pointer text-xl text-black ${inter.className} ${isCompleted ? 'line-through text-orange' : ''} break-words`}
            onClick={() => setIsEditingTask(true)}
          >
            {taskText}
          </p>
        )}
      </div>

      <button
        onClick={() => onTaskDelete(task.id)}
        className="ml-2 flex-shrink-0"
      >
        <X className='opacity-90 hover:opacity-100 text-orange' />
      </button>
    </div>
  );
};

// TaskList Component
const TaskList = ({ initialTasks = [], onUpdateTasks }) => {
  const [tasks, setTasks] = useState(initialTasks.map((task, index) => ({ ...task, id: String(index) })));  // Ensure IDs are strings
  const [newTask, setNewTask] = useState('');

  // Handle adding a new task
  const handleAddTask = (e) => {
    if (e.key === 'Enter' && newTask.trim() !== '') {
      const updatedTasks = [...tasks, { id: String(tasks.length), text: newTask, completed: false }];
      setTasks(updatedTasks);
      onUpdateTasks(updatedTasks);
      setNewTask('');
    }
  };

  // Handle task update
  const handleTaskUpdate = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(updatedTasks);
    onUpdateTasks(updatedTasks);
  };

  // Handle task delete
  const handleTaskDelete = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    onUpdateTasks(updatedTasks);
  };

  // Handle reordering tasks after dragging
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active && over && active.id !== over.id) {
      const oldIndex = tasks.findIndex((task) => task.id === active.id);
      const newIndex = tasks.findIndex((task) => task.id === over.id);
      const reorderedTasks = arrayMove(tasks, oldIndex, newIndex);
      setTasks(reorderedTasks);
      onUpdateTasks(reorderedTasks);
    }
  };

  return (
    <div className={`w-full mt-8 ${inter.className}`}>
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={tasks.map((task) => task.id)} strategy={verticalListSortingStrategy}>
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onTaskUpdate={handleTaskUpdate}
              onTaskDelete={handleTaskDelete}
            />
          ))}
        </SortableContext>
      </DndContext>

      {/* Input for adding new task */}
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyPress={handleAddTask}
        placeholder="Add a new task..."
        className={`w-full focus:outline-none my-4 text-black pl-[1vw] text-xl ${inter.className}`}
        autoFocus
      />
    </div>
  );
};

export default TaskList;
