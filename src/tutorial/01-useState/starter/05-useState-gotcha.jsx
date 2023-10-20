import { useState } from 'react';

const UseStateGotcha = () => {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
    console.log(count);
  };
  console.log(count);
  return (
    <>
      <h2>useState "gotcha"</h2>
      <h1>{count}</h1>
      <button type="button" onClick={increase} className="btn">
        increase
      </button>
    </>
  );
};

export default UseStateGotcha;
