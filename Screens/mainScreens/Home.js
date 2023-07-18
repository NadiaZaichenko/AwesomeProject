import CreatePostScreen from './CreatePost/CreatePostScreen';
import ProfileScreen from './ProfileScreen/ProfileScreen'
import PostScreen from './PostScreen/PostScreen';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { StyleSheet, TouchableOpacity, View } from 'react-native';
//add icon
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const Home = ({navigation}) => {
    
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

    <MainStack.Screen name="Публікації"
    component={PostScreen}
    options={{ headerRight: ({focused}) => (
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

    tabBarIcon: ({ focused }) => (<SimpleLineIcons name="grid" size={24} color={focused ? "#FFF" : "#212121CC"}/>
    )}}  
    />

    <MainStack.Screen  
    options={{headerShown: false, 
    tabBarIcon: ({focused}) => (<AntDesign name="plus" size={24} color={focused ? "#FFF" : "#212121CC"} />) }} 
    name="Create"
    component={CreatePostScreen}/>

    <MainStack.Screen 
    options={{headerShown: false, 
    tabBarIcon: ({focused }) => (<Feather name="user" size={24} color={focused ? "#FFF" : "#212121CC"} />)}} 
    name="Profile" 
    component={ProfileScreen}/>
   </MainStack.Navigator>
  )
}

const styles = StyleSheet.create({
  logOut: {
    top: 100,
    right: 30,
    // marginLeft: 100,
},
})
export default Home;