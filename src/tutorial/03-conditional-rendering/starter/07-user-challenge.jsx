import { useState } from 'react';

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({ name: 'j' });
  };
  const logout = () => {
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <div>
          <h4>hello there: {user.name}</h4>
          <button onClick={logout}>logout</button>
        </div>
      ) : (
        <div>
          <h4>please login </h4>
          <button onClick={login}>login</button>
        </div>
      )}
    </div>
  );
};

export default UserChallenge;
