import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet, Button} from 'react-native';
import {UserData} from './type'; // Importing UserData from the types file
import jsonData from './data.json'; // Importing JSON data file
import RegisterPage from './Register'; // Importing the RegisterPage component

const UserListPage: React.FC<{
  users: UserData[];
  setUsers: React.Dispatch<React.SetStateAction<UserData[]>>;
  setShowRegistration: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({users, setUsers, setShowRegistration}) => {
  useEffect(() => {
    // Load data from JSON file
    setUsers(jsonData);
  }, [setUsers]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>User List</Text>
        <Button
          title="Back to Registration"
          onPress={() => setShowRegistration(true)}
          color="purple"
        />
      </View>
      <FlatList
        data={users}
        renderItem={({item}) => (
          <View style={styles.userContainer}>
            <Text>Name: {item.name}</Text>
            <Text>Username: {item.username}</Text>
            <Text>Email: {item.email}</Text>
            <Text>
              Address: {item.address.street}, {item.address.city},{' '}
              {item.address.zipcode}
            </Text>
            <Text>Phone Number: {item.phone}</Text>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  userContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

export default UserListPage;
