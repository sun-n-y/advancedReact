import { useState } from 'react';

const ShortCircuitOverview = () => {
  //falsy
  const [text, setText] = useState('');
  //truthy
  const [name, setName] = useState('susan');

  return (
    <div>
      <h4>falsy or :{text || 'hello world'}</h4>
      <h4>falsy and :{text && 'hello world'}</h4>
      <h4>falsy or :{name || 'hello world'}</h4>
      <h4>truthy and :{name && 'hello world'}</h4>
    </div>
  );
};
export default ShortCircuitOverview;
