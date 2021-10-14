import React, { useState } from 'react'
import { StyleSheet, Text, View ,StatusBar ,ScrollView ,Image } from 'react-native'

import {playersapi} from '../api/api'

import Header from '../components/Header'

export default function Players() {

    const [players, setplayers] = useState([])


    playersapi()
        .then(data => setplayers(data))


    return (
        <View>
             <StatusBar barStyle="light-content" backgroundColor="#0054a4" />

            {/* Header */}
            <Header />
            <ScrollView>
            {players&&players.map((player,index) =>(        
                <View style={styles.databeBox} key={index}>
               
                <Image style={styles.tinyLogo} source={{ uri: player.PhotoUrl,}}/>
                <Text style={styles.playerContainer}>Name : {player.FirstName} {player.LastName}</Text>
                <Text style={styles.playerContainer}>Team : {player.Team}</Text>
                <Text style={styles.playerContainer}>Position : {player.Position}</Text>
                <Text numeric style={styles.playerContainer}>Experience : {player.Experience}</Text>
                <Text numeric style={styles.playerContainer}>Salaries : {player.Salary}</Text>
                <Text numeric style={styles.playerContainer}>Height : {player.Height}</Text>
                <Text numeric style={styles.playerContainer}>Weight : {player.Weight}</Text>
            
            </View>))}
      </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    databeBox:{
        margin: 20,
         textAlign: 'center',
         backgroundColor:'#0054a4',
         borderRadius:50,
         padding:10,
         justifyContent:'center',
         alignItems:'center'
    },
    playerContainer:{
        color:'#fff'

    },
    tinyLogo:{
        width: 100,
        height: 100,
        borderRadius:50

    }

})
