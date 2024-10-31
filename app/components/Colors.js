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
                <fieldset className='flex gap-2 pb-4 justify-end'>
                    <input 
                        className="appearance-none w-6 h-6 bg-violet-500 cursor-pointer hover:scale-110 transition-transform rounded-full checked:ring-2 checked:ring-offset-2 checked:ring-white bg-gradient-to-br from-violet to-blue opacity-90" 
                        type="radio" 
                        name="color" 
                        id="violet" 
                        onChange={handleColorChange}
                    />
                    <input 
                        className="appearance-none w-6 h-6 bg-blue-500 cursor-pointer hover:scale-110 transition-transform rounded-full checked:ring-2 checked:ring-offset-2 checked:ring-white bg-gradient-to-br from-blue to-lightBlue opacity-90 " 
                        type="radio" 
                        name="color" 
                        id="blue" 
                        onChange={handleColorChange}
                    />
                    <input 
                        className="appearance-none w-6 h-6  cursor-pointer hover:scale-110 transition-transform rounded-full checked:ring-2 checked:ring-offset-2 checked:ring-white bg-gradient-to-br from-orange to-lightOrange opacity-80" 
                        type="radio" 
                        name="color" 
                        id="orange" 
                        onChange={handleColorChange}
                    />
                    <input 
                        className="appearance-none w-6 h-6  cursor-pointer hover:scale-110 transition-transform rounded-full checked:ring-2 checked:ring-offset-2 checked:ring-white bg-gradient-to-br from-pink to-violet opacity-80" 
                        type="radio" 
                        name="color" 
                        id="pink" 
                        onChange={handleColorChange}
                    />
                    <input 
                        className="appearance-none w-6 h-6 bg-gray-50 cursor-pointer hover:scale-110 transition-transform rounded-full checked:ring-2 checked:ring-offset-2 checked:ring-white border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-200 opacity-90" 
                        type="radio" 
                        name="color" 
                        id="bone" 
                        onChange={handleColorChange}
                    />
                    <input 
                        className="appearance-none w-6 h-6 bg-black cursor-pointer hover:scale-110 transition-transform rounded-full checked:ring-2 checked:ring-offset-2 checked:ring-white bg-gradient-to-br from-gray-800 to-black opacity-90" 
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
