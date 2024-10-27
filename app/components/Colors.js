'use client'
import { useState } from 'react';

function Colors({ onColorChange }) {
    const handleColorChange = (e) => {
        const colorId = e.target.id;
        const bgColorClass = `bg-${colorId}`;
        onColorChange(bgColorClass);
    }
    
    return (
        <div>
            <form>
                <fieldset className='flex gap-2 pb-4 justify-end'>
                    <input 
                        className="w-6 h-6 accent-violet cursor-pointer hover:scale-110 transition-transform" 
                        type="radio" 
                        name="color" 
                        id="violet" 
                        onChange={handleColorChange}
                    />
                    <input 
                        className="w-6 h-6 accent-blue cursor-pointer hover:scale-110 transition-transform" 
                        type="radio" 
                        name="color" 
                        id="blue" 
                        onChange={handleColorChange}
                    />
                    <input 
                        className="w-6 h-6 accent-orange cursor-pointer hover:scale-110 transition-transform" 
                        type="radio" 
                        name="color" 
                        id="orange" 
                        onChange={handleColorChange}
                    />
                    <input 
                        className="w-6 h-6 accent-pink cursor-pointer hover:scale-110 transition-transform" 
                        type="radio" 
                        name="color" 
                        id="pink" 
                        onChange={handleColorChange}
                    />
                    <input 
                        className="w-6 h-6 accent-bone cursor-pointer hover:scale-110 transition-transform" 
                        type="radio" 
                        name="color" 
                        id="bone" 
                        onChange={handleColorChange}
                    />
                    <input 
                        className="w-6 h-6 accent-black cursor-pointer hover:scale-110 transition-transform" 
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
