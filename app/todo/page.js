'use client'
import React, { useState, useEffect } from 'react';
import ToDoList from '../components/ToDoList';
import { motion } from 'framer-motion';

const Page = () => {
  const [todoLists, setTodoLists] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedLists = localStorage.getItem('todoListIds');
    setTodoLists(savedLists ? JSON.parse(savedLists) : [{ id: 0 }]);
    setIsLoaded(true);
  }, []);

  const addTodoList = () => {
    const newLists = [...todoLists, { id: Date.now() }];
    setTodoLists(newLists);
    localStorage.setItem('todoListIds', JSON.stringify(newLists));
  };

  const deleteTodoList = (id) => {
    const newLists = todoLists.filter(list => list.id !== id);
    setTodoLists(newLists);
    localStorage.setItem('todoListIds', JSON.stringify(newLists));
  };

  const buttonVariants = {
    tap: { 
      scale: 0.8,
      rotate: 180,
      transition: { duration: 0.3 }
    }
  };

  if (!isLoaded) {
    return null;
  }

  return (
    <main className='min-h-screen bg-gray-100 py-[10vh] px-4 sm:px-8 lg:px-16'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex justify-center items-baseline gap-8 mb-12'>
          <h1 className='py-[1vh] borel-text title-text bg-gradient-to-r from-orange to-pink bg-clip-text text-transparent content-center'>
            To do Lists
          </h1>
          <motion.button
            onClick={addTodoList}
            whileTap="tap"
            variants={buttonVariants}
            className='bg-orange-500 hover:bg-orange-600 hover:shadow-xl text-white w-10 h-10 bg-orange font-bold rounded-full flex items-center justify-center text-2xl'
          >
            +
          </motion.button>
        </div>
        <section className='flex flex-wrap gap-6 justify-center'>
          {todoLists.map(list => (
            <ToDoList key={list.id} id={list.id} onDelete={deleteTodoList} />
          ))}
        </section>
      </div>
    </main>
  );
};

export default Page;
