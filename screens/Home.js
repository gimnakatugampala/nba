import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View ,StatusBar, Image } from 'react-native'

import {NewsNBAapi , Newsapi} from '../api/api'



import NbaNews from '../components/NbaNews'
import News from '../components/News'
import Header  from '../components/Header'

export default function Home({navigation}) {

    const [newsNBA, setnewsNBA] = useState([])
    const [news, setnews] = useState(null)

        useEffect(() => {
            NewsNBAapi()
            .then(data => {
                setnewsNBA(data)
            })

            Newsapi()
            .then(data => setnews(data))

        }, [newsNBA,news])



    return (
        <View >
             <StatusBar barStyle="light-content" backgroundColor="#0054a4" />

             <Header />

            {/* NBA News */}
            {newsNBA? <NbaNews newsNBA={newsNBA} /> : <Image source={require('../assets/loading.gif')}  /> }
            

            {/* News */}
            {/* {news? <News news={news} /> : <Image source={require('../assets/loading.gif')}  />} */}
            


        </View>
    )
}

const styles = StyleSheet.create({})
