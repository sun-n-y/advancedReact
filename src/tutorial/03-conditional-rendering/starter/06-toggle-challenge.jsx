import { useState } from 'react';

const ToggleChallenge = () => {
  const [value, setValue] = useState(false);

  // const handleClick = () => {
  //   if (value) {
  //     setValue(false);
  //     return;
  //   }
  //   setValue(true);
  // };

  return (
    <div>
      <button className="btn" onClick={() => setValue(!value)}>
        click me
      </button>
      {value && <h1>:D</h1>}
    </div>
  );
};

export default ToggleChallenge;
