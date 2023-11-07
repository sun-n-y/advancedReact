import { useState } from 'react';
import NavLinks from './NavLinks';

const Navbar = () => {
  const [user, setUser] = useState({ name: 'sunny' });
  const logout = () => {
    setUser(null);
  };
  return (
    <nav className="navbar">
      <h5>context api</h5>
      <NavLinks logout={logout} user={user} />
    </nav>
  );
};
export default Navbar;
