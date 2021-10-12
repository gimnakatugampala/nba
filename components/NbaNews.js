import React from 'react'
import { StyleSheet, Text, View ,ScrollView} from 'react-native'
import globalStyles from '../styles/styles'

export default function NbaNews() {
    return (
        <View style={globalStyles.cardContainer}>
            <Text style={globalStyles.newsTitle}>NBA News</Text>
            <ScrollView  horizontal={true} >  

            <View style={globalStyles.card}>
                <Text>Gimna</Text>
                <Text>Gimna</Text>
                <Text>Gimna</Text>
            </View>

            <View style={globalStyles.card}>
                <Text>Gimna</Text>
                <Text>Gimna</Text>
                <Text>Gimna</Text>
            </View>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({})
