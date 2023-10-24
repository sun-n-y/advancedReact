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
    const someFunc = () => {
      //some logic
    };
    window.addEventListener('scroll', someFunc);
    return () => {
      window.removeEventListener('scroll', someFunc);
    };
  }, []);
  return <h1>hello mello</h1>;
};

export default CleanupFunction;
