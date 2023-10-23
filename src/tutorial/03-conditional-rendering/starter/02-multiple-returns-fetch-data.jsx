import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setUser(data);
      } catch (error) {
        setError(true);
        console.log(error);
      }
      setIsLoading(false);
    };
    getUser();
  }, []);

  if (isLoading) {
    return <h2>loading....</h2>;
  }

  if (isError) {
    <h2>error...</h2>;
  }

  return (
    <div>
      <img
        style={{ width: '150px', borderRadius: '25px' }}
        src={user.avatar_url}
        alt={user.name}
      />
      <h2>{user.name}</h2>
      <h4>{user.company}</h4>
      <p>{user.bio}</p>
    </div>
  );
};
export default MultipleReturnsFetchData;
