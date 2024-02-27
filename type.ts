// Define types for address
interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

// Define types for user
export interface UserData {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
}

const fetchUserData = async (
  setUsers: React.Dispatch<React.SetStateAction<UserData[]>>,
) => {
  try {
    const response = await fetch('data.json'); // Assuming data.json is your JSON file
    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }
    const jsonData = await response.json();
    setUsers(jsonData); // Set the fetched user data to the state
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
};
