<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { API, graphqlOperation } from 'aws-amplify'
=======
import React, {useEffect, useState} from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { API, graphqlOperation } from 'aws-amplify'
import { useRoute } from '@react-navigation/native'
>>>>>>> main

import { Text, View } from '../components/Themed'
import SongListItem from '../components/SongListItem'
import AlbumHeader from '../components/AlbumHeader'
import { getAlbum } from '../src/graphql/queries'

const AlbumScreen = () => {

<<<<<<< HEAD
  const myRoute = useRoute();
  const albumId = myRoute.params.id;
  const [album, setAlbum] = useState(null)

  useEffect( () => {
    const fetchAlbumDetails = async () => {
      try {
        const dataAlbum = await API.graphql(graphqlOperation(getAlbum, {id:albumId}))
        setAlbum(dataAlbum.data.getAlbum)
      } catch (e) {
        console.log(e)
=======
  const route = useRoute();
  const albumId = route.params.id;

  const [album, setAlbum] = useState(null);

  useEffect( () => {
    const fetchAlbumDetails = async () => {
      try{
        const data = await API.graphql(graphqlOperation(getAlbum, { id: albumId }));
        setAlbum(data.data.getAlbum);
      }catch (e) {
        console.log(e);
>>>>>>> main
      }
    }
    fetchAlbumDetails();
  }, [])

<<<<<<< HEAD
  if(!album) {
    return <Text>Loading...</Text>;
  }
=======
  if(!album){
    return <Text>Loading</Text>
  }

>>>>>>> main
  return(
    <View style={styles.container}>
      <FlatList 
        data={album.songs.items} 
        renderItem={({ item }) => <SongListItem song={item} />}
        keyExtractor={( item ) => item.id}
        ListHeaderComponent={() => <AlbumHeader album={album} />}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "black"
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "white"
  },
});

export default AlbumScreen;