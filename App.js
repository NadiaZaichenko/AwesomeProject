import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import useRoute from './router';
import { store } from './redux/store';
import RegistrationScreen from './Screens/authScreens/RegistrationScreen/RegistrationScreen';
import LoginScreen from './Screens/authScreens/LoginScreen/LoginScreen';
import Home from './Screens/mainScreens/Home';
import { createStackNavigator } from '@react-navigation/stack';

import { Provider } from 'react-redux';

 const Part = createStackNavigator();

export default function App() {
  // const user = false;
 
  return (
    <Provider store={store}>
     <NavigationContainer>
      {/* {!user ? ( */}
      <Part.Navigator 
     screenOptions={{headerShown: false}}
     > 
      {/* {routing} */}
      <Part.Screen name="Registration" component={RegistrationScreen}/>
      <Part.Screen name="Login" component={LoginScreen}/>
      

      {/* </Part.Navigator> */}
      {/* ) : ( */}
       {/* <Part.Navigator  screenOptions={{headerShown: false}}> */}
       <Part.Screen name="Home" component={Home}/> 
      </Part.Navigator>
      {/* )}  */}
  
    <StatusBar style="auto" />
  </NavigationContainer>
  </Provider>
 
  )
  
}