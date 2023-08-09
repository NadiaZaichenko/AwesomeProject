import { createStackNavigator } from '@react-navigation/stack';
import { Text, View } from 'react-native';
import NestedPostScreen from '../../DefaultPostScreen/NestedPostScreen/NastedPostScreen';
import CommentScreen from '../../DefaultPostScreen/CommentScreen/CommentScreen';
import MapScreen from '../../DefaultPostScreen/MapScreen/MapScreen';
import { styles } from './PostScreen.styled';
import { StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
// import SvgArrowLeft from '../../assets/svg/SvgArrowLeft';

const NestedScreen = createStackNavigator();

const PostScreen = ({ navigation }) => {
  return (
    <NestedScreen.Navigator initialRouteName="NestedPostScreen" screenOptions={{ headerShown: false }}>
      <NestedScreen.Screen name="DefaultPosts" component={NestedPostScreen} />
      <NestedScreen.Screen
        name="Comments"
        component={CommentScreen}
        options={{
          ...screenOptions,
          title: 'Коментарі',
          headerLeft: () => (
            <AntDesign name="arrowleft" size={24} 
            onPress={() => navigation.goBack()}
            title="Return back"
            color="#fff"
            style={{
              ...styles.arrowLeft,
              marginRight: 90,
            }}
          />
          ),
        }}
      />
      <NestedScreen.Screen
        name="Map"
        component={MapScreen}
        options={{
          ...screenOptions,
          title: 'Карта',
          headerLeft: () => (
            <AntDesign name="arrowleft" size={24} 
              onPress={() => navigation.goBack()}
              title="Return back"
              color="#fff"
              style={{
                ...styles.arrowLeft,
                marginRight: 90,
              }}
            />
          ),
        }}
      />
    </NestedScreen.Navigator>
  );
};

export default PostScreen;

const screenOptions = {
  headerShown: true,
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


// import { View, Text, TouchableOpacity, TouchableWithoutFeedback,Image, FlatList } from "react-native";
// import { useState,useEffect } from "react";
// import { styles } from "./PostScreen.styled";
// // import { Feather } from '@expo/vector-icons'; 
// import { useFonts } from 'expo-font';
// // import * as Font from 'expo-font';

// const PostScreen = ({ navigation, route }) => {
//     // const [fontsLoaded] = useFonts({
//     //     'Roboto-Bold': require('../../../assets/fonts/Roboto-Bold.ttf'),
//     //     'Roboto-Regular': require('../../../assets/fonts/Roboto-Regular.ttf')
//     //   });
    
//     //   if (!fontsLoaded) {
//     //     return null;
//     //   };

//       const [posts, setPosts] = useState([]);
    
//       useEffect(() => {
//         if (!route.params) return;
    
//         setPosts(prevState => [...prevState, route.params.photo]);
//       }, [route.params]);

//       console.log("posts", posts)


//  return (
//     <View style={styles.container}>

//         {/* <View style={styles.user}> */}
//             {/* <View style={styles.avatar} >
//                 <Image source={require("../../../assets/images/avatar.jpg")} ></Image>
//             </View>
//             <View style ={ styles.inform}>
//                  <Text style={styles.name}>Natali Romanova</Text>
//             <Text style={styles.email}>email@example.com</Text>

//             </View> */}
//             <FlatList
//         // style={styles.postsWrapper}
//         data={posts}
//         keyExtractor={(item, idx) => idx.toString()}
//         renderItem={({ item }) => (
//             <View>
//                 <Image style={styles.photo} source={{uri: item.photo}}/>
//             </View>
//         )}
//       />
//       <View style={styles.navTabs}></View> 
//         </View>
//     // </View>
//  )
// } 

// export default PostScreen;