import React, { useState } from 'react'
import { SafeAreaView, Text,StatusBar, TextInput, TouchableOpacity } from 'react-native'
import { AppColors } from '../../constants'
import styles from './style'

const HomeScreen = ({navigation}) => {
  const [countryName, setCountryName] = useState(null)

  // countryName inputField
  const renderTextInput = () => {
    return (
      <>
        <TextInput
          style={styles.input}
          placeholder='Enter Country Code'
          onChangeText={(text) => setCountryName(text)}
         
        />
      </>
    )
  }

  // submit button
  const renderSubmitButton = () => {
    return (
      <TouchableOpacity disabled={countryName == undefined || countryName == null || countryName.length == 0 ?true:false} style={[styles.button, { backgroundColor:countryName == undefined || countryName == null || countryName.length == 0 ?AppColors.appC1C1C1:AppColors.app000000  }]} onPress={()=>navigation.navigate('DetailScreen',{countryName:countryName})}>
        <Text style={styles.buttonTitle}>Submit</Text>
      </TouchableOpacity>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
       <StatusBar backgroundColor={AppColors.appFFFFFF} barStyle='dark-content' />
      {renderTextInput()}
      {renderSubmitButton()}
    </SafeAreaView>
  )
}

export default HomeScreen