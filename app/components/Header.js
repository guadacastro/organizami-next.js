"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Origami } from 'lucide-react';

const navItems = [{name:"Home",link:"/"},{name:"To do",link:"/todo"}, {name:"About Us",link:"/aboutUs"}, {name:"Contact",link:"/contactUs"}];

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="flex flex-row items-center justify-between px-[2rem] py-[1.2rem] border-b-2 bg-gray-100 sticky top-0 z-10">
      <Origami className='w-[50px] h-[50px] bg-gradient-to-r from-orange to-violet via-pink rounded-full p-[.5rem]'/>
      
      {/* Desktop Navigation */}
      <div className="hidden lg:flex flex-grow justify-center items-center text-orange">
        <nav className="flex justify-center gap-[3rem]" >
          {navItems.map((item,idx)=><Link className='text-orange text-[1.2em] bold hover:text-black' key={idx} href={item.link}>{item.name}</Link>)}
        </nav>
      </div>
      
      {/* Login and Sign Up buttons - visible on all screen sizes */}
      <nav className="flex flex-row gap-4">
        <button className=' p-[0.5rem] lg:p-[1rem] rounded-md text-white xl:text-[1.2em] text-[1em] lg:text-base transition-colors duration-300 bg-gradient-to-r from-orange to-pink hover:from-pink hover:to-violet'>Login</button>
        <button className=' p-[0.5rem] lg:p-[1rem] rounded-md text-white xl:text-[1.2em] text-[1em] lg:text-base transition-colors duration-300 bg-gradient-to-r from-pink to-violet via-blue hover:from-violet hover:to-blue'>Sign Up</button>
      </nav>
      
      {/* Mobile Navigation */}
      <nav className="lg:hidden">
        <button onClick={() => setShowMenu(!showMenu)}>
          {showMenu ? <X size={30} color='black' /> : <Menu size={30} color='black' />}
        </button>
        {showMenu && (
          <div className="flex flex-col p-4 absolute z-20 top-[5.6rem] right-0 left-0 gap-[1rem] bg-gray-100 items-center">
            {navItems.map((item,idx)=><Link className='text-black text-[1.2em]' key={idx} href={item.link} onClick={() => setShowMenu(false)}>{item.name}</Link>)}
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
