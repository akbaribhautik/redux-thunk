
import React, { useState } from 'react';
import { View, Text, TextInput,ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native';
import {useSelector, useDispatch} from 'react-redux'
import {  loginApi } from '../../redux/ApiActionCreator'

const LoginScreen = ({navigation}) => {
  const isLoading = useSelector((state) => state.apiReducer?.loginload);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch()
  
  const handleLogin = () => {
   
    const params = {
      username: 'kminchelle',
      password: '0lelplR',
    };
 
    dispatch(loginApi({params}))
    .then((response) => {
     console.log(response)
  })
  .catch((error) => {
    console.log(error);
  });
   
  };

  return (
   <>
    {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
       
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
   </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  input: {
    width: '80%',
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default LoginScreen;
