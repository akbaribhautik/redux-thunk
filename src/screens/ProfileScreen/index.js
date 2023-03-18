import { View, Text, Button, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { apiActionCreator, clearDataApi,  } from '../../redux/ApiActionCreator'
import { useDispatch, useSelector } from 'react-redux'

const ProfileScreen = ({navigation}) => {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.apiReducer?.data);
  const auth = useSelector((state) => state.apiReducer?.loginData?.token);
 const [users, setUsers] = useState(data)
  useEffect(() => {
    fetchData()
  }, [])
  
  const fetchData=()=>{
    dispatch(apiActionCreator({ auth }))
    .then((response) => {
      
     
    })
    .catch((error) => {
      console.log(error);
    });
  }
  
  const followUser = async (id) => {
    try {
      const updatedUsers = users.map(user => {
        if (user.id === id) {
          return { ...user, followed: true };
        } else {
          return user;
        }
      });
      setUsers(updatedUsers);
    } catch (error) {
      console.error(error);
    }
  };
  const unfollowUser = async (id) => {
    try {
      const updatedUsers = users.map(user => {
        if (user.id === id) {
          return { ...user, followed: false };
        } else {
          return user;
        }
      });
      setUsers(updatedUsers);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View>
      {users.map(user => (
        <View key={user.id}>
          <Text>{user.name}</Text>
          <Text>{user.email}</Text>
          <Text>{user.followed ? 'Following' : 'Not following'}</Text>
          {user.followed ? (
            <Button
              title="Unfollow"
              onPress={() => unfollowUser(user.id)}
            />
          ) : (
            <Button
              title="Follow"
              onPress={() => followUser(user.id)}
            />
          )}
        </View>
      ))}
    </View>
  )
}

export default ProfileScreen