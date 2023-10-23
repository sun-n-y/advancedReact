import { useEffect } from 'react';
import { useState } from 'react';

const url = 'https://api.github.com/users';

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          const data = await response.json();
          setUsers(data);
        } else {
          throw new Error('wrong url');
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <>
      {users.map((user) => {
        const { id, avatar_url: image, login: name, url: link } = user;
        return (
          <div key={id}>
            <img src={image} style={{ height: '75px', width: '75px' }} alt="" />
            <h4>{name}</h4>
            <a href={link}>profile</a>
          </div>
        );
      })}
    </>
  );
};
export default FetchData;
