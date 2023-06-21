// import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View, ImageBackground} from 'react-native';
import RegistrationScreen from './Screens/RegistrationScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={require('./Screens/Image/PhotoBG.jpg')}></ImageBackground>
      <RegistrationScreen />
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // fontFamily: "Roboto",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end", 
    resizeMode: "cover",
  },
});
