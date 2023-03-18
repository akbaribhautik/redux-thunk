import { View, Text,Dimensions, Image,Button } from 'react-native'
import React,{useEffect} from 'react'
import { ChooseImage } from '../../utills/imagePicker';
import {useDispatch, useSelector} from 'react-redux';
import  { AddProfile, apiActionCreator } from '../../redux/ApiActionCreator';

const AddPhoto = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.apiReducer.data);
  const loading = useSelector((state) => state.apiReducer.loading);
  console.log('gg',data)
  const [editProfileInfo, setEditProfileInfo] = React.useState({
   
    value: {
      choosedImage: null,
    
    },
   
   
  });

  
 
  const onChooseImagePress = () => {
   
    ChooseImage(
      Dimensions.get('window').width,
      Dimensions.get('window').width * 0.74,
      true,
      'photo',
      (imageObject) => {
        dispatch(AddProfile({imageObject}))
        console.log('aaaaaaaaaaaaaa',imageObject)
        setEditProfileInfo({
          ...editProfileInfo,
          value: { ...editProfileInfo.value, choosedImage: imageObject },
        });
      },
    );
  };

  const apicall=()=>{
   
  }
  return (
    <View>
      <Text onPress={()=>onChooseImagePress()}>index</Text>

      {editProfileInfo?.value?.choosedImage?.documentPath?.uri == '' ||
        editProfileInfo?.value?.choosedImage?.documentPath?.uri == undefined ||
        editProfileInfo?.value?.choosedImage?.documentPath?.uri == null ? (
        
          <Text>ggg</Text>
        ) : (
          <Image
            style={{height:98,width:98,resizeMode:'cover'}}
            // source={AppImages.placeHolder}
            source={{
              uri:
                editProfileInfo?.value?.choosedImage &&
                editProfileInfo?.value?.choosedImage?.documentPath?.uri,
            }}
          
          />
        )}
    <Button title='add photo' onPress={()=>apicall()} />
    </View>
  )
}

export default AddPhoto