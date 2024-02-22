import {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import axios from '../node_modules/axios/index';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  phone: string;
}

export default function UserList() {
  const [data, setData] = useState<User[] | null>(null);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(data => {
        setData(data.data);
      })
      .catch(err => console.log(err));
  });
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.utama}>
          <Text style={styles.title}>Users List</Text>
          {data?.map(user => (
            <View key={user.id} style={styles.userContainer}>
              <Text style={styles.boldText}>
                Name: <Text style={styles.normalText}>{user.name}</Text>
              </Text>
              <Text style={styles.boldText}>
                Username: <Text style={styles.normalText}>{user.username}</Text>
              </Text>
              <Text style={styles.boldText}>
                Email: <Text style={styles.normalText}>{user.email}</Text>
              </Text>
              <Text style={styles.boldText}>
                Address:{' '}
                <Text style={styles.normalText}>
                  {user.address.street}, {user.address.suite},{' '}
                  {user.address.city}, {user.address.zipcode}
                </Text>
              </Text>
              <Text style={styles.boldText}>
                Phone: <Text style={styles.normalText}>{user.phone}</Text>
              </Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 10,
    borderColor: 'black',
    borderWidth: 1,
  },
  utama: {
    marginBottom: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: '900',
    marginBottom: 10,
    color: 'black',
  },
  userContainer: {
    marginBottom: 10,
    padding: 10,
    borderColor: 'lightgrey',
    borderWidth: 1,
  },
  boldText: {
    fontWeight: 'bold',
  },
  normalText: {
    fontWeight: 'normal',
  },
});
