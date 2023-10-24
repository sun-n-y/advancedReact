import { useEffect } from 'react';
import { useState } from 'react';

const CleanupFunction = () => {
  const [value, setValue] = useState(false);
  console.log('render');

  return (
    <div>
      <button onClick={() => setValue(!value)}>click</button>
      {value && <RandomComponent />}
    </div>
  );
};

const RandomComponent = () => {
  useEffect(() => {
    // console.log('hmm, thats interesting');
    const intId = setInterval(() => {
      // console.log('hello from interval');
    }, 1000);
    return () => {
      clearInterval(intId);
      console.log('cleanup');
    };
  }, []);
  return <h1>hello mello</h1>;
};

export default CleanupFunction;
