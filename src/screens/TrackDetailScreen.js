import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const TrackDetailScreen = ({navigation}) => {
  return(
    <View>
      <Text>TrackDetailScreen</Text>
      <Button
        title="Go to Track List"
        onPress={ () => navigation.navigate('TrackList') }
      />

    </View>
  );
};

const styles = StyleSheet.create({

});

export default TrackDetailScreen;
