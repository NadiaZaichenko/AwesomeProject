import CreatePostScreen from './Screens/mainScreens/CreatePost/CreatePostScreen';
import ProfileScreen from './Screens/mainScreens/ProfileScreen/ProfileScreen';
import PostScreen from './Screens/mainScreens/PostScreen/PostScreen';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { StyleSheet } from 'react-native';
//add icon
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const Home = () => {
    
    const MainStack = createBottomTabNavigator();

    return (
    <MainStack.Navigator 
    screenOptions={{
      tabBarShowLabel: false,
      tabBarStyle: {
        height: 83,
        paddingTop: 9,
        paddingRight: 80,
        paddingLeft: 80,
      },
      tabBarItemStyle: {
        width: 70,
        height: 40,
        borderRadius: 20,
      },
      tabBarActiveBackgroundColor: "#FF6C00",
    }}
    backBehavior="history">

    <MainStack.Screen 
    options={{headerShown: false, 
    tabBarIcon: ({ focused }) => (<SimpleLineIcons name="grid" size={24} color={focused ? "#FFF" : "rgba(33, 33, 33, 0.8)"}/>)}} 
    name="Posts" 
    component={PostScreen}/>

    <MainStack.Screen  
    options={{headerShown: false, 
    tabBarIcon: ({focused}) => (<AntDesign name="plus" size={24} color={focused ? "#FFF" : "rgba(33, 33, 33, 0.8)"} />) }} 
    name="Create"
    component={CreatePostScreen}/>

    <MainStack.Screen 
    options={{headerShown: false, 
    tabBarIcon: ({focused }) => (<Feather name="user" size={24} color={focused ? "#FFF" : "rgba(33, 33, 33, 0.8)"} />)}} 
    name="Profile" 
    component={ProfileScreen}/>
   </MainStack.Navigator>
  )
}


export default Home;