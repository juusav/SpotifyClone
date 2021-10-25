import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import PlayerWidget from './components/PlayerWidget'
import useCachedResources from './hooks/useCachedResources'
import Navigation from './navigation'
import Amplify from 'aws-amplify'
import config from './src/aws-exports'
Amplify.configure(config)
import { AppContext } from './AppContext';

export default function App() {
  const isLoadingComplete = useCachedResources();

  const [songId, setSongId] = useState<String|null >(null);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <AppContext.Provider value={{
          songId: null,
          setSongId: (id: String) => setSongId(id), 
        }}>
          <Navigation />
          <StatusBar />
          <PlayerWidget/>
        </AppContext.Provider>
      </SafeAreaProvider>
    );
  }
}
