/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';
import AlbumScreen from '../screens/AlbumScreen';

import { RootStackParamList } from '../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          TabOne: {
            screens: {
<<<<<<< HEAD
              HomeScreen: 'Home',
              AlbumScreen: 'AlbumDetails'

              }
=======
              TabOneScreen: 'one',
            },
          },
          TabTwo: {
            screens: {
              TabTwoScreen: 'two',
>>>>>>> main
            },
          },
        },
      },
<<<<<<< HEAD
=======
      NotFound: '*',
>>>>>>> main
    },
  };

export default linking;
