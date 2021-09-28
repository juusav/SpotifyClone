import React from 'react'
import { View, Image, Text  } from 'react-native'
import { AntDesign, FontAwesome } from '@expo/vector-icons'

import styles from './styles'


const song = {
    id: '1',
    imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
    title: 'High on You',
    artist: 'Helen',
}

const PlayerWidget = () => {

    return (
        <View style={styles.container}>
            <Image source={{ uri: song.imageUri }} style={styles.image} />
            
            <View style={styles.mainContainer}>
                <View style={styles.nameSongContainer}>
                    <Text style={styles.title}>{song.title}</Text>
                    <Text style={{color: "lightgray", marginHorizontal: 5}}>•</Text>
                    <Text style={styles.artist}>{song.artist}</Text>
                </View>
                
                <View style={styles.buttons}>
                    <FontAwesome name="heart-o" size={24} color="white" style={{marginRight: 10}} />
                    <AntDesign name="pause" size={24} color="white" />
                </View>
            </View>

        </View>
    )
}

export default PlayerWidget;