import CreatePostScreen from './CreatePost/CreatePostScreen';
import ProfileScreen from './ProfileScreen/ProfileScreen'
import PostScreen from './PostScreen/PostScreen';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { StyleSheet, TouchableOpacity, View, Keyboard } from 'react-native';
import { useState, useEffect } from 'react';
//add icon
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const Home = ({navigation}) => {
  const [keyboardShown, setKeyboardShown] = useState(false);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', handleKeyboardDidShow);
    Keyboard.addListener('keyboardDidHide', handleKeyboardDidHide);
    return () => {
      Keyboard.removeListener('keyboardDidShow', handleKeyboardDidShow);
      Keyboard.removeListener('keyboardDidHide', handleKeyboardDidHide);
    };
  }, []);

  const handleKeyboardDidShow = () => {
    setKeyboardShown(true);
  };

  const handleKeyboardDidHide = () => {
    setKeyboardShown(false);
  };
    
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

    <MainStack.Screen name="Публікації"
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

    tabBarIcon: ({ focused }) => (<SimpleLineIcons name="grid" size={24} color={focused ? "#FFF" : "#212121CC"}/>
    )}}  
    />
<MainStack.Screen 
  name="CreatePosts"
  component={CreatePostScreen}
  options={({ navigation }) => ({
  tabBarStyle: { display: 'none' },
  // ...createPostsOptions,
  headerLeft: ({focused}) => ( <View style={styles.arrowLeft}>

     <TouchableOpacity
      onPress={() => navigation.goBack()}
    >
      <Feather name="log-out" size={24} color={focused ? "rgba(33, 33, 33, 0.8)" : "#BDBDBD"} />
    </TouchableOpacity>

   </View>),
  // tabBarButton: props => (
  //   <TouchableOpacity
  //     {...props}
  //     style={{
  //       ...styles.btnTab,
  //       backgroundColor: props.accessibilityState.selected ? '#ff6c00' : '#ff6c00',
  //       width: props.accessibilityState.selected ? 40 : 40,
  //     }}
  //   />
  // ),
  tabBarIcon: ({ focused }) => {
    return focused ? (<Feather name="trash-2" color={'#dbdbdb'} size={24} />) : (<AntDesign name="plus" color={'#ffffff'} size={24}/>);
  },
})}
/>
    <MainStack.Screen 
    options={{headerShown: false, 
    tabBarIcon: ({focused }) => (<Feather name="user" size={24} color={focused ? "#FFF" : "#212121CC"} />)}} 
    name="Profile" 
    component={ProfileScreen}/>
   </MainStack.Navigator>
  )
}

const styles = StyleSheet.create({
back: {
  left: 30,
},
arrowLeft: {
    display: "flex",
    paddingRight: 10,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    height: 57,
    width: "300%",
    borderBottomWidth: 1,
    borderColor: "#BDBDBD",
      marginLeft: 16,
      marginRight: 42,
      paddingHorizontal: 16,
      paddingVertical: 10,
    },
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
  // btnActiveTab: {
  //   alignSelf: 'center',
  //   marginRight: 30,

  //   width: 70,
  //   height: 40,

  //   // paddingVertical: 8,
  //   // paddingHorizontal: 23,

  //   // backgroundColor: '#ff6c00',
  //   // borderRadius: 20,
  // },
})
export default Home;
// const Home = () => {
//   return (
//     <MainStack.Navigator
//       id="home"
//       screenOptions={{
//         tabBarStyle: {
//           height: 64,
//           paddingTop: 10,
//           paddingBottom: 20,

//           alignItems: 'center',
//           alignContent: 'center',
//           justifyContent: 'center',
//         },
//         tabBarShowLabel: false,
//         tabBarActiveTintColor: '#ff6c00',
//         tabBarInactiveTintColor: '#212121',
//         tabBarActiveBackgroundColor: "#FF6C00",
//       }}
//     >
//       <MainStack.Screen
//         name="Posts"
//         component={PostScreen}
//         options={({ navigation }) => ({
//           ...postsOptions,
//           headerRight: () => (
//             <Feather name="log-out"
//               onPress={() => navigation.navigate('Login')}
//               title="Return back"
//               color="#fff"
//               style={styles.logOut}
//             />
//           ),
//           tabBarButton: props => <TouchableOpacity {...props} style={styles.btnTab} />,
//           tabBarIcon: ({ focused, color }) => {
//             return <SimpleLineIcons name="grid" stroke={focused ? "#FFF" : "#212121CC"} size={24} />;
//           },
//         })} 
//       />
//       <MainStack.Screen
//         name="CreatePosts"
//         component={CreatePostScreen}
//         options={({ navigation }) => ({
//           tabBarStyle: { display: 'none' },
//           ...createPostsOptions,
//           headerLeft: () => (
//             <AntDesign name="arrowleft"
//               onPress={() => {
//                 navigation.goBack();
//               }}
//               title="Return back"
//               color="#fff"
//               style={styles.arrowLeft}
//             />
//           ),
//           tabBarButton: props => (
//             <TouchableOpacity
//               {...props}
//               style={{
//                 ...styles.btnTab,
//                 backgroundColor: props.accessibilityState.selected ? '#f6f6f6' : '#ff6c00',
//                 width: props.accessibilityState.selected ? 70 : 40,
//               }}
//             />
//           ),
//           tabBarIcon: ({ focused }) => {
//             return focused ? <Feather name="trash-2" stroke={'#dbdbdb'} size={24} /> : <AntDesign name="plus" fill={'#ffffff'} size={24}/>;
//           },
//         })}
//       />
//       <MainStack.Screen
//         name="Profile"
//         component={ProfileScreen}
//         options={({ navigation, route }) => ({
//           ...createPostsOptions,
//           headerShown: false,
//           headerLeft: () => (
//             <AntDesign name="arrowleft"
//               onPress={() => navigation.navigate('Posts')}
//               title="Return back"
//               color="#fff"
//               style={styles.arrowLeft}
//             />
//           ),
//           tabBarButton: props => (
//             <TouchableOpacity
//               {...props}
//               style={{
//                 ...styles.btnTab,
//                 marginRight: 0,
//               }}
//             />
//           ),
//           tabBarIcon: ({ focused, color, size }) => {
//             return <Feather name="user" size={size} fill={color} />;
//           },
//         })}
//       />
//     </MainStack.Navigator>
//   );
// };

// export default Home;

// const styles = StyleSheet.create({
//   // container: {
//   //   flex: 1,
//   //   alignItems: 'center',
//   //   justifyContent: 'center',
//   // },
//  
//   logOut: {
//     width: 24,
//     height: 24,
//     marginRight: 60,
//     marginRight: 16,
//     // paddingHorizontal: 16,
//     paddingVertical: 10,
//   },

// });

const createPostsOptions = {
  title: 'Створити публікацію',
  headerStyle: {
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(0, 0, 0, 0.3)',
    boxShadow: '0px 0.5px 0px rgba(0, 0, 0, 0.3)',
  },
  headerTintColor: '#212121',
  headerTitleStyle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 17,
    lineHeight: 22,

    textAlign: 'center',
  },
};

const postsOptions = {
  title: 'Публікації',
  headerStyle: {
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgba(0, 0, 0, 0.3)',
    boxShadow: '0px 0.5px 0px rgba(0, 0, 0, 0.3)',
  },
  headerTintColor: '#212121',
  headerTitleStyle: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 17,
    lineHeight: 22,

    marginLeft: 120,

    textAlign: 'center',
  },
};