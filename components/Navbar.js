import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Navbar({navigation}) {
    return (
        <View style={styles.navbarMain} >

            <TouchableOpacity style={styles.navbarText}>
            <Icon name="home" size={15} color="#fff" style={styles.icons} onPress={() => navigation.navigate('Home')} />
            <Text style={styles.navbarInside}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navbarText} onPress={() => navigation.navigate('Standing')}>
            <Icon name="bar-chart-o" size={15} color="#fff" style={styles.icons} />
            <Text style={styles.navbarInside}>Standing</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navbarText} onPress={() => navigation.navigate('Players')}>
            <Icon name="user" size={15} color="#fff" style={styles.icons} />
            <Text style={styles.navbarInside}>Player</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navbarText}>
            <Icon name="users" size={15} color="#fff" style={styles.icons} />
            <Text style={styles.navbarInside}>Team</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navbarText}>
            <Icon name="area-chart" size={15} color="#fff" style={styles.icons} />
            <Text style={styles.navbarInside}>Stats</Text>
        </TouchableOpacity>

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