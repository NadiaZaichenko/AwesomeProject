import CreatePostScreen from './CreatePost/CreatePostScreen';
import ProfileScreen from './ProfileScreen/ProfileScreen'
import PostScreen from './PostScreen/PostScreen';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { TouchableOpacity, View, Keyboard } from 'react-native';
import { useState, useEffect } from 'react';
//add icon
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const Home = ({navigation}) => {
  // const [keyboardShown, setKeyboardShown] = useState(false);

  // useEffect(() => {
  //   Keyboard.addListener('keyboardDidShow', handleKeyboardDidShow);
  //   Keyboard.addListener('keyboardDidHide', handleKeyboardDidHide);
  //   return () => {
  //     Keyboard.removeListener('keyboardDidShow', handleKeyboardDidShow);
  //     Keyboard.removeListener('keyboardDidHide', handleKeyboardDidHide);
  //   };
  // }, []);

  // const handleKeyboardDidShow = () => {
  //   setKeyboardShown(true);
  // };

  // const handleKeyboardDidHide = () => {
  //   setKeyboardShown(false);
  // };
    
    const MainStack = createBottomTabNavigator();

    return (
    <MainStack.Navigator 
    screenOptions={{
      tabBarShowLabel: false,
      tabBarStyle: {
        height: 83,
        paddingTop: 25,
        paddingRight: 70,
        paddingLeft: 70,
      },
      tabBarItemStyle: {
        width: 70,
        height: 40,
        borderRadius: 20,
      },
      tabBarActiveBackgroundColor: "#FF6C00",
    }}
    // backBehavior="history"
    >

    <MainStack.Screen 
    name="Публікації"
    component={PostScreen}
    options={{ 
      headerRight: ({focused}) => (
     <View style={{
      display: "flex",
      paddingRight: 10,
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
      height: 57,
      width: "300%",
      borderBottomWidth: 1,
      borderColor: "#BDBDBD",}}>
       <TouchableOpacity
        onPress={() => navigation.navigate("Login")}
      >
        <Feather name="log-out" size={24} color={focused ? "rgba(33, 33, 33, 0.8)" : "#BDBDBD"} />
      </TouchableOpacity>

     </View>
    ),
    headerTitleAlign: "center",
    headerTitleStyle: {
      fontSize: 17,
      lineHeight: 22,
      color: "#212121",
    },

    tabBarIcon: ({ focused }) => (<SimpleLineIcons name="grid" size={24} color={focused ? "#FFF" : "#212121"}/>
    )}}  
    />
<MainStack.Screen 
  name="Створити публікацію"
  component={CreatePostScreen}
  options={({ navigation }) => ({
  headerLeft: ({focused}) => (
    <View style={{
     display: "flex",
     paddingLeft: 10,
     flexDirection: "row",
     justifyContent: "flex-start",
     alignItems: "center",
     height: 57,
     width: "500%",
     borderBottomWidth: 1,
     borderColor: "#BDBDBD",}}>
      <TouchableOpacity
       onPress={() => navigation.navigate("Публікації")}
     >
       <AntDesign name="arrowleft" size={24} color={focused ? "rgba(33, 33, 33, 0.8)" : "#BDBDBD"} />
     </TouchableOpacity>

    </View>
   ),
  tabBarIcon: ({ focused }) => {
    return focused ? <Feather name="trash-2" 
   color={'#fff'} size={24} /> : <AntDesign name="plus" color={"#212121"} size={24}/>;
  },
  headerTitleAlign: "center",
  headerTitleStyle: {
    fontSize: 17,
    lineHeight: 22,
    color: "#212121",
  },
  
})}
/>
    <MainStack.Screen 
    options={{headerShown: false, 
    tabBarIcon: ({focused }) => (<Feather name="user" size={24} color={focused ? "#FFF" : "#212121"} />)}} 
    name="Profile" 
    component={ProfileScreen}/>
   </MainStack.Navigator>
  )
}

export default Home;
