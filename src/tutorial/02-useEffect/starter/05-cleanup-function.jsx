import { useEffect } from 'react';
import { useState } from 'react';

const CleanupFunction = () => {
  const [value, setValue] = useState(false);

  return (
    <div>
      <button onClick={() => setValue(!value)}>click</button>
      {value && <RandomComponent />}
    </div>
  );
};

const RandomComponent = () => {
  useEffect(() => {
    console.log('hmm, thats interesting');
  }, []);
  return <h1>hello mello</h1>;
};

export default CleanupFunction;
