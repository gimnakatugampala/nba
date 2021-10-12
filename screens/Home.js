import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Header from '../components/Header'
import NbaNews from '../components/NbaNews'

export default function Home() {
    return (
        <View >
            {/* Header */}
            <Header />

            {/* NBA News */}
            <NbaNews />
        </View>
    )
}

const styles = StyleSheet.create({

})
