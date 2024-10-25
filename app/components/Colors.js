'use client'
import { useState } from 'react';

function Colors({ onColorChange }) {
    const [selectedColor, setSelectedColor] = useState('');

    const handleColorChange = (e) => {
        const color = e.target.id;
        setSelectedColor(color);
        onColorChange(color);
    }
    
    return (
        <div>
            <form>
                <fieldset className='flex gap-2 pb-4 justify-end'>
                    <input 
                        className="w-6 h-6 accent-violet" 
                        type="radio" 
                        name="color" 
                        id="violet" 
                        onChange={handleColorChange}
                        checked={selectedColor === 'violet'}
                    />
                    <input 
                        className="w-6 h-6 accent-blue" 
                        type="radio" 
                        name="color" 
                        id="blue" 
                        onChange={handleColorChange}
                        checked={selectedColor === 'blue'}
                    />
                    <input 
                        className="w-6 h-6 accent-orange" 
                        type="radio" 
                        name="color" 
                        id="orange" 
                        onChange={handleColorChange}
                        checked={selectedColor === 'orange'}
                    />
                    <input 
                        className="w-6 h-6 accent-pink" 
                        type="radio" 
                        name="color" 
                        id="pink" 
                        onChange={handleColorChange}
                        checked={selectedColor === 'pink'}
                    />
                </fieldset>
            </form>
        </div>
    )
}

export default Colors;
