import { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = useState(data);

  const removeSingleItem = (id) => {
    const newArray = people.filter((item) => item.id !== id);
    setPeople(newArray);
  };
  console.log(useState(data));

  const removeAllItems = () => {
    setPeople([]);
  };

  return (
    <>
      <h2>useState array example</h2>
      {people.map((person) => {
        return (
          <div key={person.id}>
            <h2>{person.name}</h2>
            <button type="button" onClick={() => removeSingleItem(person.id)}>
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
