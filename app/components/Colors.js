'use client'
import { useState } from 'react';

function Colors({ onColorChange }) {
    const handleColorChange = (e) => {
        const colorId = e.target.id;
        onColorChange(colorId);
    }
    
    return (
        <div>
            <form>
                <fieldset className='flex gap-3 sm:gap-2 md:gap-3 xl:gap-4 lg:gap-3 pb-4 justify-end'>
                    <input 
                        className="appearance-none w-6 h-6 cursor-pointer hover:scale-110 transition-transform rounded-full bg-white ring-[3px] ring-violet ring-offset-[3px] checked:ring-[2px] checked:ring-white checked:ring-offset-[3px] checked:bg-gradient-to-br checked:from-violet checked:to-blue opacity-90" 
                        type="radio" 
                        name="color" 
                        id="violet" 
                        onChange={handleColorChange}
                    />
                    <input 
                        className="appearance-none w-6 h-6 cursor-pointer hover:scale-110 transition-transform rounded-full bg-white ring-[3px] ring-blue ring-offset-[3px] checked:ring-[2px] checked:ring-white checked:ring-offset-[3px] checked:bg-gradient-to-br checked:from-blue checked:to-lightBlue opacity-90" 
                        type="radio" 
                        name="color" 
                        id="blue" 
                        onChange={handleColorChange}
                    />
                    <input 
                        className="appearance-none w-6 h-6 cursor-pointer hover:scale-110 transition-transform rounded-full bg-white ring-[3px] ring-orange ring-offset-[3px] checked:ring-[2px] checked:ring-white checked:ring-offset-[3px] checked:bg-gradient-to-br checked:from-orange checked:to-lightOrange opacity-90" 
                        type="radio" 
                        name="color" 
                        id="orange" 
                        onChange={handleColorChange}
                    />
                    <input 
                        className="appearance-none w-6 h-6 cursor-pointer hover:scale-110 transition-transform rounded-full bg-white ring-[3px] ring-pink ring-offset-[3px] checked:ring-[2px] checked:ring-white checked:ring-offset-[3px] checked:bg-gradient-to-br checked:from-pink checked:to-violet opacity-90" 
                        type="radio" 
                        name="color" 
                        id="pink" 
                        onChange={handleColorChange}
                    />
                    <input 
                        className="appearance-none w-6 h-6 cursor-pointer hover:scale-110 transition-transform rounded-full bg-white ring-[3px] ring-gray-200 ring-offset-[3px] checked:ring-[2px] checked:ring-white checked:ring-offset-[3px] checked:bg-gradient-to-br checked:from-gray-50 checked:to-gray-200 opacity-90" 
                        type="radio" 
                        name="color" 
                        id="bone" 
                        onChange={handleColorChange}
                    />
                    <input 
                        className="appearance-none w-6 h-6 cursor-pointer hover:scale-110 transition-transform rounded-full bg-white ring-[3px] ring-gray-800 ring-offset-[3px] checked:ring-[2px] checked:ring-white checked:ring-offset-[3px] checked:bg-gradient-to-br checked:from-gray-800 checked:to-black opacity-90" 
                        type="radio" 
                        name="color" 
                        id="black" 
                        onChange={handleColorChange}
                    />
                </fieldset>
            </form>
        </div>
    )
}

export default Colors;
