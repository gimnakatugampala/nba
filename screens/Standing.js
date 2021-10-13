import React, { useState } from 'react'
import { StyleSheet, Text, View ,StatusBar,ScrollView } from 'react-native'
import { DataTable } from 'react-native-paper';

import {Standingapi} from '../api/api'


import Header from '../components/Header'

export default function Standing() {


    // Standingapi()
    //     .then(data => console.log(data))

    return (
        <View >
        <StatusBar barStyle="light-content" backgroundColor="#0054a4" />

        <Header />

        <ScrollView horizontal>

        {/* Table */}
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
          <DataTable.Title numeric style={styles.Title}>OT</DataTable.Title>
          <DataTable.Title style={styles.Title}>LAST 10</DataTable.Title>
          <DataTable.Title numeric style={styles.Title}>STREAK</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row style={styles.databeBox} >
          <DataTable.Cell>John</DataTable.Cell>
          <DataTable.Cell>john@kindacode.com</DataTable.Cell>
          <DataTable.Cell numeric>33</DataTable.Cell>
          <DataTable.Cell numeric>33</DataTable.Cell>
          <DataTable.Cell numeric>33</DataTable.Cell>
          <DataTable.Cell numeric>33</DataTable.Cell>
          <DataTable.Cell numeric>33</DataTable.Cell>
          <DataTable.Cell numeric>33</DataTable.Cell>
          <DataTable.Cell numeric>33</DataTable.Cell>
          <DataTable.Cell numeric>33</DataTable.Cell>
          <DataTable.Cell numeric>33</DataTable.Cell>
          <DataTable.Cell numeric>33</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={styles.databeBox} >
        <DataTable.Cell>John</DataTable.Cell>
          <DataTable.Cell>john@kindacode.com</DataTable.Cell>
          <DataTable.Cell numeric>33</DataTable.Cell>
          <DataTable.Cell numeric>33</DataTable.Cell>
          <DataTable.Cell numeric>33</DataTable.Cell>
          <DataTable.Cell numeric>33</DataTable.Cell>
          <DataTable.Cell numeric>33</DataTable.Cell>
          <DataTable.Cell numeric>33</DataTable.Cell>
          <DataTable.Cell numeric>33</DataTable.Cell>
          <DataTable.Cell numeric>33</DataTable.Cell>
          <DataTable.Cell numeric>33</DataTable.Cell>
          <DataTable.Cell numeric>33</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row style={styles.databeBox} >
        <DataTable.Cell>John</DataTable.Cell>
          <DataTable.Cell>john@kindacode.com</DataTable.Cell>
          <DataTable.Cell numeric>33</DataTable.Cell>
          <DataTable.Cell numeric>33</DataTable.Cell>
          <DataTable.Cell numeric>33</DataTable.Cell>
          <DataTable.Cell numeric>33</DataTable.Cell>
          <DataTable.Cell numeric>33</DataTable.Cell>
          <DataTable.Cell numeric>33</DataTable.Cell>
          <DataTable.Cell numeric>33</DataTable.Cell>
          <DataTable.Cell numeric>33</DataTable.Cell>
          <DataTable.Cell numeric>33</DataTable.Cell>
          <DataTable.Cell numeric>33</DataTable.Cell>
        </DataTable.Row>

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
        margin: 10,
        textAlign: 'left',
    },
    databeBox:{
        margin: 10,
         textAlign: 'center',
    }
})
