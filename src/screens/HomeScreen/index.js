import { View, Text, Button, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { apiActionCreator, clearDataApi } from '../../redux/ApiActionCreator'
import { useDispatch, useSelector } from 'react-redux'

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch()
  const auth = useSelector((state) => state.apiReducer?.loginData?.token);
 
  
  const logout=()=>{
    dispatch(clearDataApi())
  }
  return (
    <View>
      <Text>ProfileScreen</Text>
      <Button title='ProductData' onPress={()=>navigation.navigate('ProfileScreen')} />
      <Button title='Addphoto' onPress={()=>navigation.navigate('AddPhoto')}/>
      <Button title='logout' onPress={()=>logout()} />
    </View>
  )
}

export default HomeScreen