import React, {useEffect} from 'react'
import { FlatList, StyleSheet } from 'react-native'

import { Text, View } from '../components/Themed'
import { useRoute } from '@react-navigation/native'
import SongListItem from '../components/SongListItem'
import albumDetails from '../data/albumDetails'
import AlbumHeader from '../components/AlbumHeader'


const AlbumScreen = () => {

  const route = useRoute();

  useEffect( () => {
    console.log(route);
  }, [])

  return(
    <View style={styles.container}>
      <FlatList 
        data={albumDetails.songs} 
        renderItem={({ item }) => <SongListItem song={item} />}
        keyExtractor={( item ) => item.id}
        ListHeaderComponent={() => <AlbumHeader album={albumDetails} />}
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
