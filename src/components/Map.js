import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';

const Map = () => {
  let points = [];
  // points = [
  //   {
  //     latitude: 53.57,
  //     longitude: -6.1
  //   },
  //   {
  //     latitude: 53.7,
  //     longitude: -6.2
  //   }
  // ];
  // points.push(
  //   {
  //     latitude: 53.65,
  //     longitude: -6.2
  //   }
  // );


  for (let i = 0; i < 8; i++) {
    points.push(
      {
        latitude: 53.57 + i * Math.random()*0.01,
        longitude: -6.1 - i * Math.random()*0.02
      }
    );
  }
  //console.log(points);

  return(<View>
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 53.57,
        longitude: -6.1,
        latitudeDelta: 0.3,
        longitudeDelta: 0.3
      }}
    >
      <Polyline
        lineDashPattern={[1]}
        coordinates={points}
        strokeWidth={4}
      />
       {/*       */}
    </MapView>
  </View>);
};

const styles = StyleSheet.create({
  map: {
    height: 300
  }
});

export default Map;
