import { View, Text, TouchableOpacity, TouchableWithoutFeedback,Image } from "react-native";
import { styles } from "./PostScreen.styled";
import { Feather } from '@expo/vector-icons'; 
import { useFonts } from 'expo-font';
import * as Font from 'expo-font';

const PostScreen = ({ navigation }) => {
    const [fontsLoaded] = useFonts({
        'Roboto-Bold': require('../../../assets/fonts/Roboto-Bold.ttf'),
        'Roboto-Regular': require('../../../assets/fonts/Roboto-Regular.ttf')
      });
    
      if (!fontsLoaded) {
        return null;
      };
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
           
        </View>
    </View>
    </TouchableWithoutFeedback> 
 )
} 

export default PostScreen;