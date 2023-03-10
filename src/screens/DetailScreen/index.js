import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { SafeAreaView, View, Text, FlatList, StatusBar, Image, TouchableOpacity } from 'react-native'
import styles from './style'
import { AppColors } from '../../constants'



const DetailScreen = ({ navigation, route }) => {
    const countryName = route?.params?.countryName
    const [countryData, setCountryData] = useState('')

    useEffect(() => {
        fetchData()
    }, [])


    // baseUrl countrylist
    const API_URL = 'https://restcountries.com/v3/name'


    // contrylist api call 
    const fetchData = async () => {
        const url = `${API_URL}/${countryName}`;
        try {
            const response = await axios.get(url);
            setCountryData(response.data);
        } catch (error) {
            console.error(error)
        }

    }

    const renderHeader = () => {
        return (
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image style={styles.backImage} source={require('../../assets/back.png')} />
            </TouchableOpacity>
        )
    }

    const renderItem = ({ item }) => {
        return (
            <View style={styles.listView} key={item.id}>
                <Text style={styles.fontStyle}>{item.capital}</Text>
                <Text style={styles.fontStyle}>{item.population}</Text>
                <Text style={styles.fontStyle}>{item.latlng}</Text>
            </View>
        )
    }
    const listEmptyComponent = () => {
        return (
            <Text style={styles.emptyText}>empty list</Text>
        )
    }
    const countryFlatList = () => {
        return (
            <FlatList
                data={countryData}
                renderItem={renderItem}
                ListEmptyComponent={listEmptyComponent}
            />
        )
    }

    const renderTitle = () => {
        return (
            <View style={styles.listView}>
                <Text style={styles.fontStyleTitle}>capital</Text>
                <Text style={styles.fontStyleTitle}>population</Text>
                <Text style={styles.fontStyleTitle}>latlng</Text>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={AppColors.appFFFFFF} barStyle='dark-content' />
            {renderHeader()}
            {renderTitle()}
            {countryFlatList()}
        </SafeAreaView>
    )
}

export default DetailScreen