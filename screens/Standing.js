import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


import Navbar from '../components/Navbar'

export default function Standing({navigation}) {
    return (
        <View >

        {/* Navbar */}
        <Navbar navigation={navigation} />

    </View>
    )
}

const styles = StyleSheet.create({})
