import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {UserData} from './type'; // Importing UserData from the types file

const RegisterPage: React.FC<{onSubmit: (userData: UserData) => void}> = ({
  onSubmit,
}) => {
  const [userData, setUserData] = useState<UserData>({
    id: 0, // Initial ID
    name: '',
    username: '',
    email: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
    },
    phone: '',
  });

  const handleChangeName = (text: string) => {
    setUserData(prevState => ({
      ...prevState,
      name: text,
    }));
  };

  const handleChangeUsername = (text: string) => {
    setUserData(prevState => ({
      ...prevState,
      username: text,
    }));
  };

  const handleChangeEmail = (text: string) => {
    setUserData(prevState => ({
      ...prevState,
      email: text,
    }));
  };

  const handleChangeAddress = (text: string) => {
    setUserData(prevState => ({
      ...prevState,
      address: {
        ...prevState.address,
        street: text,
      },
    }));
  };

  const handleChangePhone = (text: string) => {
    setUserData(prevState => ({
      ...prevState,
      phone: text,
    }));
  };

  const handleSubmit = () => {
    // Generate random ID for the user
    const newUserData: UserData = {
      ...userData,
      id: Math.floor(Math.random() * 100),
    };
    onSubmit(newUserData);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Registration</Text>
      <TextInput
        placeholder="Name"
        style={styles.input}
        value={userData.name}
        onChangeText={handleChangeName}
      />
      <TextInput
        placeholder="Username"
        style={styles.input}
        value={userData.username}
        onChangeText={handleChangeUsername}
      />
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={userData.email}
        onChangeText={handleChangeEmail}
      />
      <TextInput
        placeholder="Address"
        style={styles.input}
        value={userData.address.street}
        onChangeText={handleChangeAddress}
      />
      <TextInput
        placeholder="Phone Number"
        style={styles.input}
        value={userData.phone}
        onChangeText={handleChangePhone}
      />
      <Button title="Register" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});

export default RegisterPage;
