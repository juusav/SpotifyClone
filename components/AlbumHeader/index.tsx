import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'

import styles from './styles'
import { Album } from '../../types'

export type AlbumHeaderProps = {
    album: Album;
}

const AlbumHeader = (props: AlbumHeaderProps) => {

    const { album } = props;

    return (
        <View style={styles.container}>
            <Image source={{ uri: album.imageUri }}  style={styles.image}/>
            <Text style={styles.name}>{album.name}</Text>
            <View style={styles.creatorContainer}>
                <Text style={styles.creator}>By {album.by}</Text>
                <Text style={{color: "lightgray"}}>•</Text>
                <Text style={styles.likes}>{album.numberOfLikes} Likes</Text>
            </View>

            <TouchableOpacity>
                <View style={styles.button}>
                    <FontAwesome5 name="play" size={24} color="white" />           
                </View>
            </TouchableOpacity>

        </View>
    )
}

export default AlbumHeader
