import React, { useState } from 'react'
import { StyleSheet, Text, View ,StatusBar,ScrollView } from 'react-native'

import Header from '../components/Header'

import {statsapi} from '../api/api'

export default function Stats() {

    const [stats, setstats] = useState([])

    statsapi()
        .then(data => setstats(data))


    return (
        <View>
             <StatusBar barStyle="light-content" backgroundColor="#0054a4" />
             <Header />

             <ScrollView>
             <View style={styles.grid} >
             {stats&&stats.map((stat,index) => (
             <View style={styles.gridItems} key={index}>
                 <Text style={styles.title}>{stat.Name} ({stat.Team})</Text>
                 <Text style={styles.game}>Games {stat.Games}</Text>
                 <View style={styles.scores}>
                     <Text style={styles.score}>WINS   LOSES</Text>
                     <Text style={styles.score}>{stat.Wins}      {stat.Losses}</Text>
                 </View>
             </View>
            ))}
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
        margin:20,
        marginBottom:80

    },
    gridItems:{
        margin:5,
        width: 150,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:30,
        backgroundColor:'#eee',
        borderRadius:20,
        shadowColor: "#000",
        elevation: 3,

    },
    title:{
        fontWeight:'bold',
        margin:10
    },
    game:{
        fontWeight:'bold',
        margin:5
    },
    scores:{
        textAlign:'center',
    },
    score:{
        textAlign:'center'
    }
})
