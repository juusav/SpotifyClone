import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import Album from '../components/Album';

const album = {
  id: '1',
  imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
  artistsHeadline: 'Taylor Swift, Kygo Objective C, Avicii'
}

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Album album={album} />
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
