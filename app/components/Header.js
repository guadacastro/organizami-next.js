"use client"
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
// import Logo from '@/app/assets/images/fox.png';
import Logo from '../assets/images/fox.png';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

 const navItems = [{name:"Home",link:"/"},{name:"To do",link:"/todo"}, {name:"About Us",link:"aboutUs"}, {name:"Contact",link:"contactUs"}];

function Header() {

  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="flex relative flex-row items-center justify-between space-between px-[2rem] py-[1.2rem] border-b-2 bg-gray-100">
        <Image src={Logo} width={50} height={50} alt='anything' />
        <div className="flex justify-between items-center w-[60%] hidden md:flex">
          <nav className="flex justify-center gap-5 " >
          {navItems.map((item,idx)=><Link className=' text-black' key={idx} href={item.link} >{item.name}</Link>)}
          </nav>
          <nav className="flex flex-row gap-4">
            <button className=' bg-blue-600 p-[1rem] rounded-md'>Login</button>
            <button className=' bg-orange-400 p-[1rem] rounded-md'>Sign Up</button>
          </nav>
        </div>
        <nav className="md:hidden ">
          <button
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu ? <X size={45} color='black' /> : <Menu size={45} color='black' />}
          </button>
          {showMenu && (
            <div className="flex flex-col p-4 absolute z-10 top-[11vh] right-0 left-0 gap-[1rem] bg-gray-100 items-center">
              {navItems.map((item,idx)=><Link className=' text-black' key={idx} href={item.link} >{item.name}</Link>)}
              <nav className="flex flex-col gap-[1rem]">
                <button className="bg-blue-600 p-[.5rem] rounded-md">Login</button>
                <button className="bg-orange-400 p-[.5rem] rounded-md">Sign Up</button>
              </nav>
            </div>
          )}
      </nav>
    
    </header>
  );
}

export default Header;
