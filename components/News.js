import React from 'react'
import { StyleSheet, Text, View ,ScrollView, Image} from 'react-native'
import globalStyles from '../styles/styles'

export default function News({news}) {
    return (
        <View style={globalStyles.cardContainer}>
            <Text style={globalStyles.newsTitle}>News</Text>
            <ScrollView  horizontal={true}  showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} >  
            

            {
                news.map((newss,index) => (
                    <View style={globalStyles.card} key={index}>
                    <View style={globalStyles.cardHeader}>
                        <Text>TEAM</Text>
                        <Text>Author</Text>
                    </View>
                    <Text style={globalStyles.cardContent}>lorem lorem loremlorem</Text>
                    <Text style={globalStyles.cardDate}>Yesterday</Text>
                </View>

                ))
            }


            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({})
