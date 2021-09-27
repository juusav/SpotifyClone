import * as React from 'react'
import { StyleSheet } from 'react-native'

import { Text, View } from '../components/Themed'

const AlbumScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Hola</Text>
  </View>
  
)

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

export default AlbumScreen;
