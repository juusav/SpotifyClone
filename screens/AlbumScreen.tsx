import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { API, graphqlOperation } from 'aws-amplify'

import { Text, View } from '../components/Themed'
import SongListItem from '../components/SongListItem'
import AlbumHeader from '../components/AlbumHeader'
import { getAlbum } from '../src/graphql/queries'


export default function AlbumScreen () {

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
      }
    }
    fetchAlbumDetails();
  }, [])

  if(!album) {
    return <Text>Loading...</Text>;
  }
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

