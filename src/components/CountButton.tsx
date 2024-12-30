
import React, { useState } from 'react'

function CountButton() {
    const [number, setNumber] = useState<number>(0);

    const increment = () => {
        setNumber(number+1);
    };

  return (
    <div className='flex flex-row justify-center items-center'>
      <button onClick={increment} className='bg-red-600 p-2 text-white'>+</button>
        <span className='text-xl font-bold'>{number}</span>
      
    </div>
  )
}

export default CountButton;
