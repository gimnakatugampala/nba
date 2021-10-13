import React from 'react'
import { StyleSheet, Text, View ,ScrollView, Image} from 'react-native'
import globalStyles from '../styles/styles'

export default function News({news}) {

    console.log(news)

    return (
        <View style={globalStyles.cardContainer}>
            <Text style={globalStyles.newsTitle}>News</Text>
            <ScrollView  horizontal={true}  showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} >  
            

            {
                news.map((newss,index) => (
                    <View style={globalStyles.card} key={index}>
                        <Image
                        style={styles.tinyLogo}
                        source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                        }}
                    />
                    <View style={globalStyles.cardHeader}>
                        <Text>TEAM</Text>
                        <Text>Author</Text>
                    </View>
                    <Text style={globalStyles.cardContent}>{newss.title}</Text>
                    <Text style={globalStyles.cardDate}>{newss.publishedAt}</Text>
                </View>

                ))
            }


            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({})
