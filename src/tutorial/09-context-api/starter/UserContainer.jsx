const UserContainer = ({ logout, user }) => {
  return (
    <div className="user-container">
      {user ? (
        <>
          <p>Hi, {user?.name?.toUpperCase()}</p>
          <button type="button" className="btn" onClick={logout}>
            logout
          </button>
        </>
      ) : (
        <p>please login</p>
      )}
    </div>
  );
};

export default UserContainer;
