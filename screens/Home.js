import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Header from '../components/Header'
import NbaNews from '../components/NbaNews'
import News from '../components/News'

export default function Home() {
    return (
        <View >
            {/* Header */}
            <Header />

            {/* NBA News */}
            <NbaNews />

            {/* News */}
            <News />

        </View>
    )
}

const styles = StyleSheet.create({

})
