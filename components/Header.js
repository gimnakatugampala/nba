import React from 'react'
import { StyleSheet, Text, View ,Image } from 'react-native'

export default function Header() {
    return (
        <View style={styles.headerContainer}>
            <Image source={require('../assets/nba-logo-design.jpg')} style={styles.images} />
            <Text style={styles.headerText}>NBA</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer:{
        backgroundColor:'#0054a4',
        display:'flex',
        flexDirection:'row',
        borderBottomLeftRadius:4,
        borderBottomRightRadius:4,
    },
    images:{
        width:100,
        height:50,
        margin:2,
        borderRadius:50
    },
    headerText:{
        color:'#fff',
        fontSize:30,
        padding:10,
        fontWeight: 'bold',
        letterSpacing:5

    }
})
