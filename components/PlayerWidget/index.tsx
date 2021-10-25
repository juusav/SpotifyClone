import React, {useContext, useEffect, useState} from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
<<<<<<< HEAD
import { graphqlOperation, API } from 'aws-amplify'
import { Sound } from 'expo-av/build/Audio'
=======
import { Audio } from 'expo-av'
import { API, graphqlOperation } from 'aws-amplify'
>>>>>>> main

import styles from './styles'
import { AppContext } from '../../AppContext'
import { getSong } from '../../src/graphql/queries'

const PlayerWidget = () => {
<<<<<<< HEAD

    const [sound, setSound] = useState<Sound|null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(true);
    const [duration, setDuration] = useState<number|null>(null);
    const [position, setPosition] = useState<number|null>(null);
    const [song, setSong] = useState(null);

    const {songId} = useContext(AppContext);
    
    useEffect(() => {
        //Fetch data about song
        const fetchSong = async () => {
            try {
                const dataSong = await API.graphql(graphqlOperation(getSong, {id: songId}))
                setSong(dataSong.data.getSong);
            } catch (e) {
=======
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
>>>>>>> main
                console.log(e);
            }
        }
        fetchSong();
<<<<<<< HEAD
    }, [])
=======
    }, [songId])
>>>>>>> main

    const onPlaybackStatusUpdate = (status) => {
        setIsPlaying(status.isPlaying);
        setDuration(status.durationMillis);
        setPosition(status.positionMillis);
    }
    const playCurrentSong = async () => {
        if (sound) {
            await sound.unloadAsync();
        }
        const { sound: newSound } = await Sound.createAsync(
            { uri: song.uri},
            { shouldPlay: isPlaying },
            onPlaybackStatusUpdate
        )
        setSound(newSound)
    }
    useEffect( () => {
<<<<<<< HEAD
        if ( song ) {
            playCurrentSong();
        }
        playCurrentSong();
    }, [song]) //only when a song is found
=======
        if (song) {
            playCurrentSong();
        }
    }, [song])
>>>>>>> main
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

<<<<<<< HEAD
    if(!song){
        return null;
    }
=======
    if (!song) {
        return null;
    }

>>>>>>> main
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