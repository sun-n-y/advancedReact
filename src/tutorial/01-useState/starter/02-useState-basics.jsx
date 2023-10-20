import { useState } from 'react';

const UseStateBasics = () => {
  // console.log(useState(1));
  // const value = useState('hello')[0];
  // const func = useState('hello')[1];
  // console.log(value);
  // console.log(func);

  const [count, setCount] = useState(0);
  console.log(count);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h4>you clicked {count}</h4>
      <button className="btn" type="button" onClick={handleClick}>
        click me
      </button>
    </div>
  );
};

export default UseStateBasics;
