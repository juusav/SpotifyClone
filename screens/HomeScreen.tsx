import * as React from 'react'
import { StyleSheet, FlatList } from 'react-native'
import { API, graphqlOperation } from 'aws-amplify'

import { Text, View } from '../components/Themed'
import AlbumCategory from '../components/AlbumCategory'
import { listAlbumCategories } from '../src/graphql/queries'

export default function HomeScreen() {

  const [categories, setCategories] = React.useState([]);

  React.useEffect( () => {
    const fetchAlbumCategories = async () => {
      
      try {
        const data = await API.graphql(graphqlOperation(listAlbumCategories));
        setCategories(data.data.listAlbumCategories.items);
      }catch (e) {
        console.log(e);
      }
    }
    fetchAlbumCategories();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList 
        data={categories}
        renderItem={({ item }) => (
          <AlbumCategory title={item.title} albums={item.albums.items} /> 
        )}
        keyExtractor={(item) => item.id}
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
