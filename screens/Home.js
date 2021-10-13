import React from 'react'
import { StyleSheet, Text, View ,StatusBar } from 'react-native'



import Header from '../components/Header'
import NbaNews from '../components/NbaNews'
import News from '../components/News'
import Navbar from '../components/Navbar'

export default function Home({navigation}) {
    return (
        <View >
             <StatusBar barStyle="light-content" backgroundColor="#0054a4" />

            {/* NBA News */}
            <NbaNews />

            {/* News */}
            <News />

            {/* Navbar */}
            <Navbar navigation={navigation} />

        </View>
    )
}

const styles = StyleSheet.create({})
