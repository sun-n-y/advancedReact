import { useState } from 'react';

const UseStateObject = () => {
  // gorup them
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    hobby: 'read books',
  });

  // const [name, setName] = useState('peter');
  // const [age, setAge] = useState(24);
  // const [hobby, setHobby] = useState('read books');

  const handleClick = () => {
    // setPerson({ name: 'john', age: 25, hobby: 'scream at the computer' });
    setPerson({ ...person, hobby: 'scream at the computer' });
  };

  return (
    <>
      <h2>useState object example</h2>
      <h4>{person.name}</h4>
      <h4>{person.age}</h4>
      <h4>Enjoys : {person.hobby}</h4>
      <button type="button" className="btn" onClick={handleClick}>
        show john
      </button>
    </>
  );
};

export default UseStateObject;
