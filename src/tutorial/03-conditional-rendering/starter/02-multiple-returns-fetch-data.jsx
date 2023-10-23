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
        if (!response.ok) {
          setError(true);
          setIsLoading(false);
          return;
        }
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
    return <h2>error...</h2>;
  }

  const { avatar_url, name, company, bio } = user;

  return (
    <div>
      <img
        style={{ width: '150px', borderRadius: '25px' }}
        src={avatar_url}
        alt={name}
      />
      <h2>{name}</h2>
      <h4>{company}</h4>
      <p>{bio}</p>
    </div>
  );
};
export default MultipleReturnsFetchData;
