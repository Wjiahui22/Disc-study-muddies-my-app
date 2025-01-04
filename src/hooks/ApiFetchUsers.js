import { useState, useEffect } from "react";

function ApiFetchUsers(){
const [users, setUsers] = useState([]);

  const addUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]); // Add to the end of the array
  };

  useEffect(() => {
    let ignore = false;

    fetch("https://disc-assignment-5-users-api.onrender.com/api/users")
      .then((response) => response.json())
      .then((data) => {
        if (!ignore) {
          setUsers(data); // Use the API response directly
        }
      })
      .catch((error) => console.error("Error fetching users:", error));

    return () => {
      ignore = true;
    };
  }, []);
  return [users, addUser]
}

export default ApiFetchUsers;
