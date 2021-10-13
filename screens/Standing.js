import React, { useState } from 'react'
import { StyleSheet, Text, View ,StatusBar,ScrollView } from 'react-native'
import { DataTable } from 'react-native-paper';

import {Standingapi} from '../api/api'


import Header from '../components/Header'

export default function Standing() {

    const [standings, setstandings] = useState([])


    Standingapi()
        .then(data => setstandings(data))

    return (
        <View>
        <StatusBar barStyle="light-content" backgroundColor="#0054a4" />

        <Header />

        {/* Table */}
        <ScrollView horizontal>
        <DataTable>
        <DataTable.Header style={styles.databeHeader}>
          <DataTable.Title style={styles.Title}>TEAM</DataTable.Title>
          <DataTable.Title style={styles.Title}>W</DataTable.Title>
          <DataTable.Title numeric style={styles.Title}>L</DataTable.Title>
          <DataTable.Title numeric style={styles.Title}>WIN%</DataTable.Title>
          <DataTable.Title numeric style={styles.Title}>GB</DataTable.Title>
          <DataTable.Title numeric style={styles.Title}>CONF</DataTable.Title>
          <DataTable.Title numeric style={styles.Title}>DIV</DataTable.Title>
          <DataTable.Title numeric style={styles.Title}>HOME</DataTable.Title>
          <DataTable.Title numeric style={styles.Title}>ROAD</DataTable.Title>
          <DataTable.Title style={styles.Title}>LAST 10</DataTable.Title>
          <DataTable.Title numeric style={styles.Title}>STREAK</DataTable.Title>
        </DataTable.Header>
    
        {standings&& standings.map((standing,index) =>(
            <DataTable.Row style={styles.databeBox} key={index} >
            <DataTable.Cell>{standing.Key}</DataTable.Cell>
            <DataTable.Cell>{standing.Wins}</DataTable.Cell>
            <DataTable.Cell numeric>{standing.Losses}</DataTable.Cell>
            <DataTable.Cell numeric>{standing.Percentage}</DataTable.Cell>
            <DataTable.Cell numeric>{standing.GamesBack}</DataTable.Cell>
            <DataTable.Cell numeric>{standing.ConferenceWins} - {standing.ConferenceLosses}</DataTable.Cell>
            <DataTable.Cell numeric>{standing.DivisionWins} - {standing.DivisionLosses}</DataTable.Cell>
            <DataTable.Cell numeric>{standing.HomeWins} - {standing.HomeLosses}</DataTable.Cell>
            <DataTable.Cell numeric>{standing.AwayWins} - {standing.AwayLosses}</DataTable.Cell>
            <DataTable.Cell numeric>{standing.LastTenWins} - {standing.LastTenLosses}</DataTable.Cell>
            <DataTable.Cell numeric>{standing.StreakDescription}</DataTable.Cell>
          </DataTable.Row>

        ))}
        
      </DataTable>
      </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
 
    Title:{
        margin:10
    },
    databeHeader:{
        margin: 5,
        textAlign: 'left',
    },
    databeBox:{
        margin: 10,
         textAlign: 'center',
    }
})
