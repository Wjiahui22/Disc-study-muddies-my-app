const addUser = (setUsers, newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };
  
  export default addUser;
  