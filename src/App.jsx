// import React from 'react'
// import { useSelector , useDispatch } from 'react-redux'
// import { increment , decrement } from './components/CounterSlice'
// function App() {

//   const myState = useSelector((state)=> state.counter?.count)
//   const dispatch = useDispatch();

//   return (
//     <div className='flex flex-col items-center justify-center h-screen'>
//       <p>Redux Tool Kit Example</p>
//       <input type="text" value={myState} readOnly />
//       <button className='p-2 bg-red-700 border rounded-md' onClick={()=> dispatch(increment)}>plus</button>
//       <button className='p-2 bg-red-700 border rounded-md' onClick={()=> dispatch(decrement)}>minus</button>
//     </div>
//   )
// }

// export default App


// App.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './components/CounterSlice';

function App() {
  const count = useSelector((state) => state.counter?.count); // Using optional chaining to avoid undefined errors
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <p>Redux Toolkit Example</p>
      <input type="text" value={count} readOnly className="mb-4 p-2 border border-black rounded-md" />
      <div><button
        onClick={handleIncrement}
        className="p-2 bg-red-700 border rounded-md mb-2"
      >
        Plus
      </button>
      <button
        onClick={handleDecrement}
        className="p-2 bg-red-700 border rounded-md"
      >
        Minus
      </button></div>
    </div>
  );
}

export default App;
