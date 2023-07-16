import { View, Text, TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { styles } from "./PostScreen.styled";
import { Feather } from '@expo/vector-icons'; ;

const PostScreen = () => {
 return (
    <TouchableWithoutFeedback>
        <View style={styles.container}>
        <View style={styles.div}>
            <Text style={styles.title}>Публікації</Text>
             <TouchableOpacity>
             <Feather name="log-out" size={24} color="black" />
            </TouchableOpacity>
        </View>
    </View>
    </TouchableWithoutFeedback> 
 )
} 

export default PostScreen;