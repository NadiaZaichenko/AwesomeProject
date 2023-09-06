import { useIsFocused } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { styles } from './MapScreen.styled';

const MapScreen = ({ route, navigation }) => {
  const isFocused = useIsFocused();

  const [location, setLocation] = useState({});

  useEffect(() => {
    if (isFocused) {
      navigation?.getParent('home')?.setOptions({
        tabBarStyle: { display: 'none' },
        headerShown: false,
      });
    }

    if (route.params) {
      setLocation(route.params.location) 
  };
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
             latitude: 37.4220936,
             longitude: -122.083922,
             latitudeDelta: 0.006,
             longitudeDelta: 0.006,
        }}
      >
        {location && <Marker title="It`s here" coordinate={location} />}
      </MapView>
    </View>
  );
};

export default MapScreen;

