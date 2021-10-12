import { StyleSheet} from 'react-native'


const globalStyles = StyleSheet.create({
    cardContainer:{
        marginTop:20,
        marginBottom:20
    },
    newsTitle:{
        fontSize:25,
        fontWeight:'bold',
        margin:10
    },  
    card:{
        padding:20,
        margin:20,
        borderRadius:20,
        shadowColor: "#000",
        elevation: 3,
    },
    cardHeader:{
        display:'flex',
        justifyContent:'space-between',
        flexDirection:'row'
    },
    cardContent:{
        fontWeight:'bold',
        fontSize:15
    },
    cardDate:{
        color:'	rgb(200,200,200)'
    }
})

export default globalStyles

