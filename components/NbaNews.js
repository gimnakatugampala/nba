import React from 'react'
import { StyleSheet, Text, View ,ScrollView} from 'react-native'
import globalStyles from '../styles/styles'

export default function NbaNews() {
    return (
        <View style={globalStyles.cardContainer}>
            <Text style={globalStyles.newsTitle}>NBA News</Text>
            <ScrollView  horizontal={true}  showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} >  

            <View style={globalStyles.card}>
                <View style={globalStyles.cardHeader}>
                    <Text>TEAM</Text>
                    <Text>Author</Text>
                </View>
                <Text style={globalStyles.cardContent}>lorem lorem loremlorem</Text>
                <Text style={globalStyles.cardDate}>Yesterday</Text>
            </View>

            <View style={globalStyles.card}>
                <View style={globalStyles.cardHeader}>
                    <Text>TEAM</Text>
                    <Text>Author</Text>
                </View>
                <Text style={globalStyles.cardContent}>lorem lorem loremlorem</Text>
                <Text style={globalStyles.cardDate}>Yesterday</Text>
            </View>

            <View style={globalStyles.card}>
                <View style={globalStyles.cardHeader}>
                    <Text>TEAM</Text>
                    <Text>Author</Text>
                </View>
                <Text style={globalStyles.cardContent}>lorem lorem loremlorem</Text>
                <Text style={globalStyles.cardDate}>Yesterday</Text>
            </View>


            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({})
