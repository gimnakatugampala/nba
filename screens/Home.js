import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Header from '../components/Header'
import NbaNews from '../components/NbaNews'
import News from '../components/News'
import Navbar from '../components/Navbar'

export default function Home() {
    return (
        <View >
            {/* Header */}
            <Header />

            {/* NBA News */}
            <NbaNews />

            {/* News */}
            <News />

            {/* Navbar */}
            <Navbar />

        </View>
    )
}

const styles = StyleSheet.create({

})
