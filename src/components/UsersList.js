// components/UsersList.js
import React, { useEffect, useState } from "react";

const UsersList = () => {
  const [users, setUsers] = useState([]); // State to hold users data
  const [loading, setLoading] = useState(true); // State for loading indicator

  useEffect(() => {
    fetchUsers(); // Fetch users data when the component mounts
  }, []);

  const fetchUsers = async () => {
    try {
      // Use the environment variable for the API URL
      const response = await fetch(process.env.REACT_APP_API_URL);

      if (response.ok) {
        const data = await response.json(); // Parse the data
        setUsers(data); // Store data in state
        setLoading(false); // Update loading state
      } else {
        throw new Error("Failed to fetch users");
      }
    } catch (error) {
      console.error(error); // Log any errors
      setLoading(false); // Stop loading state on error
    }
  };

  if (loading) {
    return <div>Loading users...</div>; // Show loading message
  }

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.first_name} {user.last_name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
