import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { requestForegroundPermissionsAsync } from 'expo-location';
import Map from '../components/Map';

const TrackCreateScreen = () => {
  const [ err, setErr ] = useState(null);

  // helper fn
  const startWatchingLocation = async () => {
    try {
      const { granted } = await requestForegroundPermissionsAsync();
      if( !granted ) {
        throw new Error('Location permission not granted');
      }
    }
    catch (e) {
      setErr( e );
    }
  };

  useEffect( () => {
    startWatchingLocation();
  }, []);

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h3>TrackCreateScreen</Text>
      <Map />
      { err
        ? <Text style = {styles.error} >
            Please grant permission to access your location
          </Text>
        : null }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  error: {
    color: 'red',
    fontSize: 14
  }
});

export default TrackCreateScreen;
