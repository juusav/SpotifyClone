import React, {useContext, useEffect, useState} from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { Audio } from 'expo-av'
import { API, graphqlOperation } from 'aws-amplify'

import styles from './styles'
import { AppContext } from '../../AppContext'
import { getSong } from '../../src/graphql/queries'

const PlayerWidget = () => {
    const [song, setSong] = useState(null);
    const [sound, setSound] = useState<Audio.Sound|null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(true);
    const [duration, setDuration] = useState<number|null>(null);
    const [position, setPosition] = useState<number|null>(null);

    const { songId } = useContext(AppContext);
    useEffect( () => {
        const fetchSong = async () => {
            try{
                const data = await API.graphql(graphqlOperation(getSong, { id: songId} ))
                setSong(data.data.getSong);
            }catch (e){
                console.log(e);
            }
        }
        fetchSong();
    }, [songId])

    const onPlaybackStatusUpdate = (status) => {
        setIsPlaying(status.isPlaying);
        setDuration(status.durationMillis);
        setPosition(status.positionMillis);
    }
    const playCurrentSong = async () => {
        if (sound) {
            await sound.unloadAsync();
        }
        const { sound: newSound } = await Audio.Sound.createAsync(
            { uri: song.uri },
            { shouldPlay: isPlaying },
            onPlaybackStatusUpdate
        )
        setSound(newSound)
    }
    useEffect( () => {
        if (song) {
            playCurrentSong();
        }
    }, [song])
    const onPlayPausePress = async () => {
        if (!sound) {
            return;
        }
        if (isPlaying) {
            await sound.stopAsync();
        }else{
            await sound.playAsync();
        }
    }
    const getProgress = () => {
        if (song === null || duration === null || position === null) { 
            return 0 ;
        }
        return (position / duration ) * 100;
    }

    if (!song) {
        return null;
    }

    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <Image source={{ uri: song.imageUri }} style={styles.image} />
                <View style={styles.nameSongContainer}>
                    <Text style={styles.title}>{song.title}</Text>
                    <Text style={{color: "lightgray", marginHorizontal: 5}}>•</Text>
                    <Text style={styles.artist}>{song.artist}</Text>
                </View>
                <View style={styles.buttons}>
                    <FontAwesome name="heart-o" size={22} color="white" style={{marginRight: 10}} />
                    <TouchableOpacity onPress={onPlayPausePress} >
                        <Ionicons name={isPlaying ? "pause-outline" : "md-play"} size={26} color="white" />
                    </TouchableOpacity>
                </View>                
            </View>
            <View style={[styles.progress, {width: `${getProgress()}%`}]} />
        </View>
    )
}

export default PlayerWidget;