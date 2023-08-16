import React from 'react';

import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

import RegistrationScreen from './Screens/authScreens/RegistrationScreen/RegistrationScreen';
import LoginScreen from './Screens/authScreens/LoginScreen/LoginScreen';
import Home from './Screens/mainScreens/Home';
import { createStackNavigator } from '@react-navigation/stack';
import { Text } from 'react-native';



 const Part = createStackNavigator();

export default function App() {
  return (

    <Provider store={store}>
      <PersistGate loading ={<Text>...Loading</Text>} persistor={persistor}>
      <NavigationContainer>
      <Part.Navigator 
     screenOptions={{headerShown: false}}
     > 
      <Part.Screen name="Login" component={LoginScreen}/>
      <Part.Screen name="Registration" component={RegistrationScreen}/>
      <Part.Screen name="Home" component={Home}/> 
      </Part.Navigator>
  </NavigationContainer>
      </PersistGate>
  </Provider>
  )
}