import User from "./User";

const Users = ({ users }) => {
  return (
    <>
      {
        users.map((userData) => (
          <User key={userData.id} data={userData} />
        ))
      }
    </>
  );
};

export default Users;
