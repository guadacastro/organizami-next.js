'use client';
import { useState, useEffect } from 'react';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { arrayMove, SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { AlignJustify, X } from 'lucide-react';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// Task Component with Draggable functionality
const Task = ({ task, onTaskUpdate, onTaskDelete, styles }) => {
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
        <button
          {...attributes}
          {...listeners}
          className="ml-2 cursor-move hover:text-orange touch-none"
          type="button"
        >
          <AlignJustify className='opacity-50 hover:opacity-100'/>
        </button>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={handleCompletedChange}
          className={`ml-2 h-7 w-7 ${styles.checkbox} appearance-none checked:bg-current border-2 border-current rounded-full 
          transition-colors duration-200 cursor-pointer
          checked:border-0 relative
          after:content-['✓'] after:absolute after:text-black after:opacity-0 checked:after:opacity-100
          after:top-[50%] after:left-[50%] after:transform after:-translate-x-[50%] after:-translate-y-[50%] after:text-xl`}
        />
      </div>
      

      <div className="flex-grow min-w-0">
        {isEditingTask ? (
          <input
            type="text"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            onKeyPress={handleTaskKeyPress}
            className={`border-b border-current/20 focus:outline-none w-full pl-[1vw] rounded-md shadow-sm text-xl ${styles.text} ${styles.inputBg} font-poppins`}
            autoFocus
          />
        ) : (
          <p
            className={` cursor-pointer text-xl ${styles.text} font-poppins ${isCompleted ? 'line-through' : ''} break-words`}
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
const TaskList = ({ initialTasks = [], onUpdateTasks, styles, todoListId }) => {
  const [tasks, setTasks] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTasks = localStorage.getItem(`todolist-${todoListId}-tasks`);
      return savedTasks ? JSON.parse(savedTasks) : initialTasks.map((task, index) => ({ 
        ...task, 
        id: String(index) 
      }));
    }
    return initialTasks.map((task, index) => ({ ...task, id: String(index) }));
  });

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

  useEffect(() => {
    onUpdateTasks(tasks);
  }, [tasks]);

  return (
    <div className={` py-[.5vh] px-[1vw] ${inter.className}`}>
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd} className='shadow-lg'>
        <SortableContext items={tasks.map((task) => task.id)} strategy={verticalListSortingStrategy}>
          {tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              onTaskUpdate={handleTaskUpdate}
              onTaskDelete={handleTaskDelete}
              styles={styles}

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
        className={`w-full focus:outline-none my-4 pl-[5vw] py-[1.5vh] rounded-lg shadow-sm text-base font-poppins ${styles.text} ${styles.inputBg} border-b border-current/20 placeholder:text-sm placeholder:${styles.text}`}
        autoFocus
      />
    </div>
  );
};

export default TaskList;
