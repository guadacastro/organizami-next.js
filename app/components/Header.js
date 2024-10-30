"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Origami } from 'lucide-react';
import { usePathname } from 'next/navigation';

const navItems = [{name:"Home",link:"/"},{name:"To do",link:"/todo"}, {name:"About us",link:"/aboutUs"}, {name:"Contact",link:"/contactUs"}];

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();

  return (
    <header className="flex flex-row items-center justify-between px-[2rem] py-[1.2rem] border-b-2 bg-gray-100 sticky top-0 z-10">
      <Link href="/">
        <Origami className='w-[50px] h-[50px] bg-gradient-to-r from-orange to-violet via-pink rounded-full p-[.5rem]'/>
      </Link>
      
      {/* Desktop Navigation */}
      <div className="hidden lg:flex flex-grow justify-center items-center text-orange">
        <nav className="flex justify-center gap-[3rem]" >
          {navItems.map((item,idx)=>
            <Link 
              className={`
                font-poppins tracking-wide
                text-[1.3em] relative
                bg-gradient-to-r from-orange to-pink bg-clip-text text-transparent 
                hover:bg-gradient-to-r hover:from-pink hover:to-violet
                transition-all duration-300
                ${pathname === item.link ? 
                  'after:content-[""] after:absolute after:bottom-[-5px] after:left-0 after:w-full after:h-[3px] after:bg-gradient-to-r after:from-pink after:to-violet after:rounded-full after:animate-pulse' 
                  : 'after:content-[""] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-[3px] after:bg-gradient-to-r after:from-pink after:to-violet after:rounded-full after:transition-all after:duration-300 hover:after:w-full'
                }
              `} 
              key={idx} 
              href={item.link}
            >
              {item.name}
            </Link>
          )}
        </nav>
      </div>
      
      {/* Login and Sign Up buttons - visible on all screen sizes */}
      <nav className="flex flex-row gap-4">
        <button className='font-poppins font-medium py-[1vh] px-[2vw] xl:py-[1vh] lg:px-[1vw] rounded-md text-white xl:text-[1.2em] text-[1em] lg:text-base transition-colors duration-300 bg-gradient-to-r from-orange to-pink hover:from-pink hover:to-violet'>Login</button>
        <button className='font-poppins font-medium py-[1vh] px-[2vw] xl:py-[1vh] lg:px-[1vw] rounded-md text-white xl:text-[1.2em] text-[1em] lg:text-base transition-colors duration-300 bg-gradient-to-r from-pink to-violet via-blue hover:from-violet hover:to-blue'>Sign Up</button>
      </nav>
      
      {/* Mobile Navigation */}
      <nav className="lg:hidden">
        <button onClick={() => setShowMenu(!showMenu)}>
          {showMenu ? <X size={30} color='black' /> : <Menu size={30} color='black' />}
        </button>
        {showMenu && (
          <div className="flex flex-col p-4 absolute z-20 top-[5.6rem] right-0 left-0 gap-[1rem] bg-gray-100 items-center">
            {navItems.map((item,idx)=>
              <Link 
                className={`
                  font-montserrat font-medium tracking-wide
                  text-black text-[1.2em] relative
                  transition-all duration-300
                  ${pathname === item.link ? 
                    'text-transparent bg-clip-text bg-gradient-to-r from-pink to-violet font-bold scale-110' 
                    : 'hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink hover:to-violet'
                  }
                `} 
                key={idx} 
                href={item.link} 
                onClick={() => setShowMenu(false)}
              >
                {item.name}
              </Link>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
