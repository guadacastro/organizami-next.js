"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Origami } from 'lucide-react';
import { usePathname } from 'next/navigation';
import WeatherWidget from './WeatherWidget';
import PomodoroTimer from './PomodoroTimer';

const navItems = [{name:"Home",link:"/"},{name:"To do",link:"/todo"}, {name:"About us",link:"/aboutUs"}, {name:"Contact",link:"/contactUs"}];

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();

  return (
    <header className="flex flex-row items-center justify-between px-4 md:px-6 xl:px-[2rem] py-[1.2rem] border-b-2 bg-gray-100 sticky top-0 z-10">
      <Link href="/">
        <Origami className='w-[40px] h-[40px] md:w-[45px] md:h-[45px] xl:w-[50px] xl:h-[50px] bg-gradient-to-r from-orange to-violet via-pink rounded-full p-[.5rem] bg-opacity-80'/>
      </Link>
      
      {/* Desktop Navigation */}
      <div className="hidden lg:flex flex-grow justify-center items-center text-orange">
        <nav className="flex justify-center items-center" >
          {/* Navigation Links */}
          <div className="flex gap-3 lg:gap-4 xl:gap-[3rem]">
            {navItems.map((item,idx)=>
              <Link 
                className={`
                  font-poppins tracking-wide
                  text-sm lg:text-base xl:text-[1.3em] relative
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
          </div>
          {/* Widgets with specific spacing */}
          <div className="flex items-center gap-3 lg:gap-4 xl:gap-[3rem] ml-3 lg:ml-4 xl:ml-[3rem]">
            <WeatherWidget />
            <PomodoroTimer />
          </div>
        </nav>
      </div>
      
      {/* Login and Sign Up buttons */}
      <nav className="flex flex-row gap-2 md:gap-3 xl:gap-4">
        <button className='bg-opacity-80 font-poppins font-medium py-2 px-3 lg:px-4 xl:px-[2vw] rounded-md text-white text-sm lg:text-base xl:text-[1.2em] transition-colors duration-300 bg-gradient-to-r from-orange to-pink hover:from-pink hover:to-violet'>Login</button>
        <button className='bg-opacity-80 font-poppins font-medium py-2 px-3 lg:px-4 xl:px-[2vw] rounded-md text-white text-sm lg:text-base xl:text-[1.2em] transition-colors duration-300 bg-gradient-to-r from-pink to-violet via-blue hover:from-violet hover:to-blue'>Sign Up</button>
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
