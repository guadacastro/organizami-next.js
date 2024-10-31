'use client'
import React, { useState, useEffect } from 'react';
import ToDoList from '../components/ToDoList';

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

  if (!isLoaded) {
    return null; // or a loading spinner
  }

  return (
    <main className='flex flex-col items-center min-h-screen bg-gray-100 p-2'>
      <div className='flex justify-center items-baseline w-full max-w-5xl mb-6 relative pb-8'>
        <h1 className='text-3xl font-bold mt-8 text-black self-baseline'>To do Lists</h1>
        <button
          onClick={addTodoList}
          className='bg-orange-500 hover:bg-orange-600 text-white w-10 h-10 bg-orange font-bold rounded-full mt-8 ml-auto flex items-center justify-center text-2xl'
        >
          +
        </button>
      </div>
      <section className='flex flex-wrap xxl:flex-row xl:flex-row flex-col lg:flex-row justify-center gap-6 w-full max-w-5xl min-w-4xl'>
        {todoLists.map(list => (
          <ToDoList key={list.id} id={list.id} onDelete={deleteTodoList} />
        ))}
      </section>
    </main>
  );
};

export default Page;

