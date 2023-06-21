import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={require("./assets/images/PhotoBG.jpg")}></ImageBackground>
      {/* <Text style={styles.text}>Open up App.js to start working on your app!</Text> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  text: {
    color: 'red',
    fontSize: 40,
  },
  image: {
    flex: 1,
    resizeMode:'cover',
    justifyContent: 'center',
  }
});
