//add screens
import RegistrationScreen from './Screens/authScreens/RegistrationScreen/RegistrationScreen';
import LoginScreen from './Screens/authScreens/LoginScreen/LoginScreen';
import PostScreen from './Screens/mainScreens/PostScreen/PostScreen';
import CreatePostScreen from './Screens/mainScreens/CreatePost/CreatePostScreen';
import ProfileScreen from './Screens/mainScreens/ProfileScreen/ProfileScreen';
//add library component
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { StyleSheet } from 'react-native';
//add icon
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


const AuthStack = createStackNavigator();
const MainStack = createBottomTabNavigator();

const useRoute = (isAuth) => {
    if(!isAuth) {
      return (
        <AuthStack.Navigator>
      <AuthStack.Screen options={{headerShown: false}} name="Login" component={LoginScreen}/>
      <AuthStack.Screen options={{headerShown: false}} name="Registration" component={RegistrationScreen}/>
      <AuthStack.Screen options={{headerShown : false}} name="Posts" component={PostScreen}/>
      </AuthStack.Navigator>
      )
    }
    return (
      <MainStack.Navigator 
      screenOptions={() => ({
        tabBarStyle: {
          height: 64,
          paddingTop: 10,
          paddingBottom: 20,

          alignItems: "stretch",
          alignContent: 'center',
          justifyContent: 'center',
        },
      })}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: '#212121',
        inactiveTintColor: '#ff6c00',
        // activeBackgroundColor: "#ff6c00",
        // inActiveBackgroundColor: "#212121",
      }}>
      <MainStack.Screen 
      options={{headerShown: false, 
        // tabBarIconStyle: {{...styles.btnTab, borderRadius: 20,}},

      tabBarIcon: ({focused, size, color}) => (<SimpleLineIcons name="grid" size={size} color={color} tabBarIconStyle />)}} 
      name="Posts" 
      component={PostScreen}/>

      <MainStack.Screen  
      options={{headerShown: false, 
      tabBarIcon: ({focused, size, color}) => (<AntDesign name="plus" size={size} color={color} />) }} 
      name="Create"
      component={CreatePostScreen}/>

      <MainStack.Screen 
      options={{headerShown: false, 
      tabBarIcon: ({focused, size, color}) => (<Feather name="user" size={size} color={color} />)}} 
      name="Profile" 
      component={ProfileScreen}/>
     </MainStack.Navigator>
    )
  }


const styles = StyleSheet.create({
    btnTab: {
        alignSelf: 'center',
        marginRight: 30,
        width: 40,
        height: 40,
        paddingVertical: 8,
        paddingHorizontal: 8,
        backgroundColor: '#ffffff',
        borderRadius: 20,
      },

})

  export default useRoute;

