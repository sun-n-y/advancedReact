import React from 'react';
import avatar from '../../../assets/default-avatar.svg';

const Person = ({ name, nickName = 'defaultValue', images }) => {
  const img = images?.[0]?.small?.url || avatar;
  return (
    <div>
      <img src={img} alt={name} style={{ width: '50px' }} />
      <h4>{name}</h4>
      <p>nickname: {nickName}</p>
    </div>
  );
};
export default Person;
