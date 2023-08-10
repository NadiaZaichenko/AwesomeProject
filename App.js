import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import useRoute from './router';
import RegistrationScreen from './Screens/authScreens/RegistrationScreen/RegistrationScreen';
import LoginScreen from './Screens/authScreens/LoginScreen/LoginScreen';
import Home from './Screens/mainScreens/Home';
import { createStackNavigator } from '@react-navigation/stack';

 const Part = createStackNavigator();

export default function App() {
 
  return <NavigationContainer>
    <Part.Navigator 
    initialRouteName='Home'
     screenOptions={{headerShown: false}}
     >
      <Part.Screen name="Login" component={LoginScreen}/>
      <Part.Screen name="Registration" component={RegistrationScreen}/>
      <Part.Screen name="Home" component={Home}/>
    </Part.Navigator>
    <StatusBar style="auto" />
  </NavigationContainer>
}