import React from 'react'
import { StyleSheet, Text, View  } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Navbar() {
    return (
        <View style={styles.navbarMain}>
            <View style={styles.navbarText}>
            <Icon name="home" size={15} color="#fff" style={styles.icons} />
            <Text style={styles.navbarInside}>Home</Text>
        </View>

            <View style={styles.navbarText}>
            <Icon name="bar-chart-o" size={15} color="#fff" style={styles.icons} />
            <Text style={styles.navbarInside}>Standing</Text>
        </View>

        <View style={styles.navbarText}>
            <Icon name="user" size={15} color="#fff" style={styles.icons} />
            <Text style={styles.navbarInside}>Player</Text>
        </View>

        <View style={styles.navbarText}>
            <Icon name="users" size={15} color="#fff" style={styles.icons} />
            <Text style={styles.navbarInside}>Team</Text>
        </View>

        <View style={styles.navbarText}>
            <Icon name="area-chart" size={15} color="#fff" style={styles.icons} />
            <Text style={styles.navbarInside}>Stats</Text>
        </View>

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
        flex:1,
        justifyContent:'center'
    },
    navbarInside:{
        color:'#fff',
        textAlign:'center'

    },
    icons:{
        textAlign:'center'
    }
})