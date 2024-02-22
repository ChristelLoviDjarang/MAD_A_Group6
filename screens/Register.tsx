import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Register = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.utama}>
      <Text style={styles.title}>Registration</Text>
      <View>
        <Text style={styles.text}>Name</Text>
        <TextInput
          style={styles.inputUsername}
          placeholder={'Masukan name anda'}
        />
      </View>

      <View>
        <Text style={styles.text}>Username</Text>
        <TextInput
          style={styles.inputUsername}
          placeholder={'Masukan username anda anda'}
        />
      </View>

      <View>
        <Text style={styles.text}>Email</Text>
        <TextInput
          style={styles.inputUsername}
          placeholder={'Masukan email anda'}
        />
      </View>

      <View>
        <Text style={styles.text}>Address</Text>
        <TextInput
          style={styles.inputUsername}
          placeholder={'Masukan alamat anda'}
        />
      </View>

      <View>
        <Text style={styles.text}>Phone Number</Text>
        <TextInput
          style={styles.inputUsername}
          placeholder={'Masukan nomor telepon anda'}
          keyboardType={'numeric'}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('UserList' as never)}>
        <Text style={{color: 'white'}}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  title: {
    fontSize: 35,
    fontWeight: '900',
    color: 'black',
  },
  utama: {
    padding: 20,
  },
  text: {
    marginTop: 25,
    color: 'black',
    fontWeight: '500',
  },
  inputUsername: {
    borderColor: 'black',
    borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  button: {
    backgroundColor: '#d500f9',
    marginTop: 50,
    padding: 15,
    borderRadius: 23,
    alignItems: 'center',
  },
});
