import { NavigationContainer } from '@react-navigation/native';
import useRoute from './router';
import RegistrationScreen from './Screens/authScreens/RegistrationScreen/RegistrationScreen';
import LoginScreen from './Screens/authScreens/LoginScreen/LoginScreen';
import Home from './Screens/mainScreens/Home';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  // const routing = useRoute(true)
  const Part = createStackNavigator();
  return <NavigationContainer>
    <Part.Navigator 
    // initialRouteName='Login'
     screenOptions={{headerShown: false}}
     >
      {/* <Part.Screen name="Login" component={LoginScreen}/> */}
      {/* <Part.Screen name="Registration" component={RegistrationScreen}/> */}
      <Part.Screen name="Home" component={Home}/>
    </Part.Navigator>
  </NavigationContainer>
}