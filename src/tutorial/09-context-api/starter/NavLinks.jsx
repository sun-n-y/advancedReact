import UserContainer from './UserContainer';

const NavLinks = ({ logout, user }) => {
  return (
    <div className="nav-container">
      <ul className="nav-links">
        <li>
          <a href="#">home</a>
        </li>
        <li>
          <a href="#">about</a>
        </li>
      </ul>
      <UserContainer logout={logout} user={user} />
    </div>
  );
};
export default NavLinks;
