import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Register, UserList} from './screens';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Registration" component={Register} />
        <Stack.Screen name="UserList" component={UserList} />
      </Stack.Navigator>
    </NavigationContainer>
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
