import { useState } from 'react';

const UseStateObject = () => {
  const [name, setName] = useState('peter');
  const [age, setAge] = useState(24);
  const [hobby, setHobby] = useState('read books');

  const handleClick = () => {
    setName('john');
    setAge(44);
    setHobby('soccer');
  };

  return (
    <>
      <h2>useState object example</h2>
      <h4>{name}</h4>
      <h4>{age}</h4>
      <h4>Enjoys : {hobby}</h4>
      <button type="button" className="btn" onClick={handleClick}>
        show john
      </button>
    </>
  );
};

export default UseStateObject;
