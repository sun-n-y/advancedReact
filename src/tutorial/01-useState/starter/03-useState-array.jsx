import { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  console.log(people);

  const removeSingleItem = (e) => {
    console.log('single');
  };

  const removeAllItems = (e) => {
    console.log('all');
  };

  return (
    <>
      <h2>useState array example</h2>
      {people.map((person) => {
        return (
          <div key={person.id}>
            <h2>{person.name}</h2>
            <button type="button" onClick={removeSingleItem}>
              remove
            </button>
          </div>
        );
      })}
      <button type="button" onClick={removeAllItems} className="btn">
        clear items
      </button>
    </>
  );
};

export default UseStateArray;
