import { createStackNavigator } from '@react-navigation/stack';
import { View, TouchableOpacity } from 'react-native';

import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import NestedPostScreen from '../../DefaultPostScreen/NestedPostScreen/NastedPostScreen';
import CommentScreen from '../../DefaultPostScreen/CommentScreen/CommentScreen';
import MapScreen from '../../DefaultPostScreen/MapScreen/MapScreen';

import { styles } from './PostScreen.styled';

const NestedScreen = createStackNavigator();

const PostScreen = ({ navigation , route }) => {

  return (
    <NestedScreen.Navigator initialRouteName="NestedPostScreen" 
    >
      <NestedScreen.Screen
       name="NestedPostScreen" 
       component={NestedPostScreen} 
      options={{ 
      title: "Публікації",
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
      <NestedScreen.Screen
        name="Comments"
        component={CommentScreen}
        options={{
          ...screenOptions,
          tabBarVisible: false,
          title: 'Коментарі',
          headerLeft: () => (
            <AntDesign name="arrowleft" size={24} 
            onPress={() => navigation.goBack()}
            title="Return back"
            color="#000"
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
              color="#000"
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