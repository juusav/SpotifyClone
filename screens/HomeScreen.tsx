import * as React from 'react'
import { StyleSheet, FlatList } from 'react-native'

import { Text, View } from '../components/Themed'
import AlbumCategory from '../components/AlbumCategory'
import albumCategories from '../data/albumCategories'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlatList 
        data={albumCategories}
        renderItem={({ item }) => (
          <AlbumCategory 
            title={item.title}
            albums={item.albums} 
            keyExtractor={item.id}
          /> 
          )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "black"
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "white"
  },
});
