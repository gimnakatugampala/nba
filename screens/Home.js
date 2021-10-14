import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View ,StatusBar, Image } from 'react-native'

import {NewsNBAapi , Newsapi} from '../api/api'



import NbaNews from '../components/NbaNews'
import News from '../components/News'
import Header  from '../components/Header'
import globalStyles from '../styles/styles'

export default function Home() {

    const [newsNBA, setnewsNBA] = useState([])
    const [news, setnews] = useState([])

        useEffect(() => {
            NewsNBAapi()
            .then(data => {
                setnewsNBA(data)
            })

            Newsapi()
            .then(data => setnews(data.articles))

        }, [newsNBA,news,setnews,setnewsNBA])



    return (
        <View >
             <StatusBar barStyle="light-content" backgroundColor="#0054a4" />

             <Header />
              

            {/* NBA News */}
            {newsNBA.length === 0 ? <Image style={globalStyles.loader} source={require('../assets/loading.gif')}  /> : <NbaNews newsNBA={newsNBA} />  }
            

            {/* News */}
            {news && <News news={news}  /> }
            


        </View>
    )
}

const styles = StyleSheet.create({
})
