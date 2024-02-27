import React, {useState, useEffect} from 'react';
import RegisterPage from './Register';
import UserListPage from './UserList';
import {UserData} from './type'; // Importing UserData from the types file

const App: React.FC = () => {
  const [users, setUsers] = useState<UserData[]>([]);
  const [showRegistration, setShowRegistration] = useState<boolean>(true); // State to toggle between registration and user list

  useEffect(() => {
    // Load data from JSON file
    fetchUserData(); // Call the function to fetch user data
  }, []);

  // Function to fetch user data
  const fetchUserData = async () => {
    try {
      const response = await fetch('data.json'); // Assuming data.json is your JSON file
      const jsonData = await response.json();
      setUsers(jsonData); // Set the fetched user data to the state
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleRegistration = (userData: UserData) => {
    setUsers([...users, userData]);
    setShowRegistration(false); // Hide registration page after registration
  };

  return showRegistration ? (
    <RegisterPage onSubmit={handleRegistration} />
  ) : (
    <UserListPage
      users={users}
      setUsers={setUsers}
      setShowRegistration={setShowRegistration}
    /> // Pass setShowRegistration to UserListPage
  );
};

export default App;