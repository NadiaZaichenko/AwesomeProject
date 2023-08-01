import { View, Text, TouchableOpacity, TouchableWithoutFeedback,Image, FlatList } from "react-native";
import { useState,useEffect } from "react";
import { styles } from "./PostScreen.styled";
// import { Feather } from '@expo/vector-icons'; 
import { useFonts } from 'expo-font';
// import * as Font from 'expo-font';

const PostScreen = ({ navigation, route }) => {
    const [fontsLoaded] = useFonts({
        'Roboto-Bold': require('../../../assets/fonts/Roboto-Bold.ttf'),
        'Roboto-Regular': require('../../../assets/fonts/Roboto-Regular.ttf')
      });
    
      if (!fontsLoaded) {
        return null;
      };

      const [posts, setPosts] = useState([]);

    //   useEffect(() => {
    //     if(route.params) {
    //         setPosts((prevState) => [...prevState, route.params]) 
    //     }
    //   }, [route.params]);
    //   console.log(posts);


 return (
    <TouchableWithoutFeedback>
    <View style={styles.container}>
{/*         
        <View style={styles.div}>
            <Text style={styles.title}>Публікації</Text>
        </View> */}

        <View style={styles.user}>
            <View style={styles.avatar} >
                <Image source={require("../../../assets/images/avatar.jpg")} ></Image>
            </View>
            <View style ={ styles.inform}>
                 <Text style={styles.name}>Natali Romanova</Text>
            <Text style={styles.email}>email@example.com</Text>

            </View>
            <View>
                {/* <FlatList data={posts} keyExtractor={(index) => index.toString()} renderItem={({item}) => ( 
                <View>
                    <Image source={{uri: item.photo}} />
                </View> )} /> */}

            </View>
           
        </View>
    </View>
    </TouchableWithoutFeedback> 
 )
} 

export default PostScreen;