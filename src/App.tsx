import { useState } from 'react';
import { HelloWorld } from '@components';
import { CHM } from '@assets';

const App = () => {
  const [count, setCount] = useState(0);
  const handleAdd = () => {
    setCount((prev) => prev + 1);
  };
  const handleSub = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <div className='flex items-center justify-center h-screen flex-col'>
      <h1 className='text-3xl text-red-700'>My App</h1>
      <p>Welcome to Init React Project!</p>
      <div className='mt-4 space-x-2'>
        <button onClick={handleAdd} className='px-4 py-2 bg-blue-500 text-white rounded'>
          I++
        </button>
        <button onClick={handleSub} className='px-4 py-2 bg-blue-500 text-white rounded'>
          I--
        </button>
        <p className='mt-4'>Count: {count}</p>
      </div>
      <HelloWorld />
      <img src={CHM} alt='CHM' className='h-32 w-32' />
    </div>
  );
};

export default App;
