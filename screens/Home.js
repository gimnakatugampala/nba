import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View ,StatusBar, Image } from 'react-native'

import {NewsNBAapi , Newsapi} from '../api/api'



import NbaNews from '../components/NbaNews'
import News from '../components/News'
import Navbar from '../components/Navbar'

export default function Home({navigation}) {

    const [newsNBA, setnewsNBA] = useState([])
    const [news, setnews] = useState(null)

        useEffect(() => {
            NewsNBAapi()
            .then(data => {
                setnewsNBA(data)
            })

            Newsapi()
            .then(data => console.log(data))

        }, [newsNBA])



    return (
        <View >
             <StatusBar barStyle="light-content" backgroundColor="#0054a4" />

            {/* NBA News */}
            {newsNBA? <NbaNews newsNBA={newsNBA} /> : <Image source={require('../assets/loading.gif')}  /> }
            

            {/* News */}
            {/* {news? <News news={news} /> : <Image source={require('../assets/loading.gif')}  />} */}
            

            {/* Navbar */}
            {/* <Navbar navigation={navigation} /> */}

        </View>
    )
}

const styles = StyleSheet.create({})
