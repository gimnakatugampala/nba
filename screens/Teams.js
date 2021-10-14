import React, { useState } from 'react'
import { StyleSheet, Text, View ,StatusBar ,ScrollView, Image } from 'react-native'

import Header from '../components/Header'
import { SvgUri } from 'react-native-svg';

import {teamsapi} from '../api/api'

import globalStyles from '../styles/styles'

export default function Teams() {

    const [teams, setteams] = useState([])

    teamsapi()
        .then(data => setteams(data))


    return (
        <View>
             <StatusBar barStyle="light-content" backgroundColor="#0054a4" />

             <Header />
             <ScrollView>
                 <View style={styles.grid}>
                {teams.length === 0 ? <Image style={globalStyles.loader} source={require('../assets/loading.gif')}  /> : teams.map((team,index) => (
                     <View style={styles.gridItem} key={index}>
                      <SvgUri
                    width="60%"
                    height="60%"
                    margin-top='30%'
                    uri={team.WikipediaLogoUrl}
                />
                     <Text>{team.Name}</Text>
                     <Text>City - {team.City}</Text>
                     <Text>Conference - {team.Conference}</Text>
                     <Text>Division - {team.Division}</Text>
                 </View>

                )) }
               
               
                </View>
             </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    grid:{
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
        margin:20
    },
    gridItem:{
        margin:5,
        width: 150,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:30
    },
    tinyLogo:{
        width:70,
        height:70,
        margin:20
    }
})
