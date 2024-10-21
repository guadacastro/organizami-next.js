'use client'
import React, { useState } from 'react';
import ToDoList from '../components/ToDoList';

const Page = () => {
  const [todoLists, setTodoLists] = useState([{ id: 0 }]);

  const addTodoList = () => {
    setTodoLists([...todoLists, { id: Date.now() }]);
  };

  const deleteTodoList = (id) => {
    setTodoLists(todoLists.filter(list => list.id !== id));
  };

  return (
    <main className='flex flex-col items-center min-h-screen bg-gray-100 p-2'>
      <div className='flex justify-center items-baseline w-full max-w-5xl mb-6 relative pb-8'>
        <h1 className='text-3xl font-bold mt-8 text-black self-baseline '>Welcome to your To-Do List</h1>
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
  )
}

export default Page
