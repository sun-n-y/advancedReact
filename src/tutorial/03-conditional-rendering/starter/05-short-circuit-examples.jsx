import { useState } from 'react';

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState('');
  // truthy
  const [name, setName] = useState('susan');
  const [user, setUser] = useState({ name: 'john' });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <h2>{text || 'default value'}</h2>
      {text && (
        <div>
          <h2>whatever return</h2>
          <h2>{name}</h2>
        </div>
      )}
      {/* {!text && (
        <div>
          <h2>whatever return</h2>
          <h2>{name}</h2>
        </div>
      )} */}
      {user && <SomeComponent name={user.name} />}
      <h2>ternary operator</h2>
      <button className="btn">{isEditing ? 'edit' : 'add'}</button>
      {user ? (
        <div>
          <h2>hello user</h2>
        </div>
      ) : (
        <h4>login</h4>
      )}
    </div>
  );
};

const SomeComponent = ({ name }) => {
  return (
    <div>
      <h2>whatever return</h2>
      <h2>{name}</h2>
    </div>
  );
};

export default ShortCircuitExamples;
