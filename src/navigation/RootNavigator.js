import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';
import { useSelector } from 'react-redux';



const RootNavigator = () => {
  const data = useSelector((state) => state.apiReducer?.loginData?.token);
  console.log('fgfg',data)
  

  return (
    <NavigationContainer>
      {
       data? <AppNavigator />:<AuthNavigator />  
      }
    </NavigationContainer>
  )
}

export default RootNavigator