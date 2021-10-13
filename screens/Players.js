import React from 'react'
import { StyleSheet, Text, View ,StatusBar } from 'react-native'

import Header from '../components/Header'

export default function Players() {
    return (
        <View>
             <StatusBar barStyle="light-content" backgroundColor="#0054a4" />

            {/* Header */}
            <Header />


            <Text>Player</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
