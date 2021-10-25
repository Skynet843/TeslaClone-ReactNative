import React from 'react'
import { View, Text,FlatList, Dimensions,StatusBar  } from 'react-native'
import styles from './styles'
import cars from './cars'
import CarItem from '../CarItem/index'

const CarList = () => {
    
    const real_height=Dimensions.get('window').height+StatusBar.currentHeight
    return (
        <View style={styles.container}>
            <FlatList 
            data={cars}
            keyExtractor={(item) => item.name}
            renderItem={({item})=>{
                return <CarItem car={item}/>
            }}
            showsVerticalScrollIndicator={false}
            snapToAlignment={'start'}
            decelerationRate={'fast'}
            snapToInterval={real_height}
            />
        </View>
    )
}

export default CarList
