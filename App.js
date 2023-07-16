import RegistrationScreen from './Screens/authScreens/RegistrationScreen/RegistrationScreen';
import LoginScreen from './Screens/authScreens/LoginScreen/LoginScreen';
import PostScreen from './Screens/home/PostScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AuthStack = createStackNavigator();

export default function App() {
  return <NavigationContainer>
    <AuthStack.Navigator>
      <AuthStack.Screen options={{headerShown: false}} name="Login" component={LoginScreen}/>
      <AuthStack.Screen options={{headerShown: false}} name="Registration" component={RegistrationScreen}/>
    </AuthStack.Navigator>
   

  </NavigationContainer>
}