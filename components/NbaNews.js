import React from 'react'
import { StyleSheet, Text, View ,ScrollView ,Linking } from 'react-native'

import globalStyles from '../styles/styles'

export default function NbaNews({newsNBA}) {
    return (
        <View style={globalStyles.cardContainer}>
            <Text style={globalStyles.newsTitle}>NBA News</Text>
            <ScrollView  horizontal={true}  showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} >  
            {
                newsNBA.map((news,index) => (
                    <View style={globalStyles.card} key={index} onPress={() => Linking.openURL(news.Url).catch((err) => console.error('An error occurred', err))}>
                    <View style={globalStyles.cardHeader}>
                        <Text>{news.Team}</Text>
                        <Text>{news.OriginalSource}</Text>
                    </View>
                    <Text style={globalStyles.cardContent}>{news.Title}</Text>
                    <Text style={globalStyles.cardDate}>{news.TimeAgo}</Text>

                    </View>
    
                    
                ))
            }
        </ScrollView>

          
        </View>
    )
}

const styles = StyleSheet.create({})
