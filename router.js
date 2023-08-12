//add screens
import RegistrationScreen from './Screens/authScreens/RegistrationScreen/RegistrationScreen';
import LoginScreen from './Screens/authScreens/LoginScreen/LoginScreen'
import Home from "./Screens/mainScreens/Home"
//add library component
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

const MainStack = createBottomTabNavigator();

const useRoute = (isAuth) => {
    if(!isAuth) {
      return (
        <MainStack.Navigator>
      <MainStack.Screen options={{headerShown: false}} name="Registration" component={RegistrationScreen}/>

      <MainStack.Screen options={{headerShown: false}} name="Login" component={LoginScreen}/>
      </MainStack.Navigator>
      )
    }
    return (
      <MainStack.Navigator >
        <MainStack.Screen name="Home" component={Home} options ={{headerShown: false}}/>
     </MainStack.Navigator>
    )
  }

  export default useRoute;

