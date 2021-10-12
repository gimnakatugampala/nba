import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Navbar() {
    return (
        <View style={styles.navbarMain}>
            <Text style={styles.navbarText}>Home</Text>
            <Text style={styles.navbarText}>Staning</Text>
            <Text style={styles.navbarText}>Player</Text>
            <Text style={styles.navbarText}>Team</Text>
            <Text style={styles.navbarText}>State</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    navbarMain:{
        backgroundColor:'#0054a4',
        display:'flex',
        flexDirection:'row',
        padding:15,
        marginTop:40,
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
        
    },
    navbarText:{
        color:'#fff',
        flex:1,
        padding:5,
        textAlign:'center'
    }
})
