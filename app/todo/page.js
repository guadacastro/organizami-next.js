import React from 'react';
import ToDoList from '../components/ToDoList';
const page = () => {
  return (
    <main className='flex flex-row justify-center h-screen flex-wrap gap-[2rem] items-baseline py-[20vh] px-[2vw] w-auto'>
      <ToDoList />
      <ToDoList />
      <ToDoList />
      <ToDoList />
      <ToDoList />
      <ToDoList />
      <ToDoList />
    </main>
    
  )
}

export default page