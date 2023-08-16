import React, {useState, useEffect} from "react";
import { 
    StyleSheet, 
    Text, 
    View, 
    FlatList,
    Image,
    TouchableOpacity,
    ImageBackground
 } from "react-native";
 import { collection, query, where, getDocs } from "firebase/firestore";
 import {  db } from "../../../firebase/config";
 import { useNavigation, useIsFocused  } from '@react-navigation/native';
 import {  useSelector, useDispatch } from "react-redux";
 import { selectUserId, selectName } from "../../../redux/auth/authSelectors";
//  import bgImage from '../assets/PhotoBg.png';
//  import avatar from '../assets/avatar.png';
 import { Ionicons } from '@expo/vector-icons';
 import { EvilIcons } from '@expo/vector-icons';
 import { AntDesign } from '@expo/vector-icons';
 import { MaterialIcons } from '@expo/vector-icons';
import { logOut } from "../../../redux/auth/authOperation";
import { styles } from "./Profile.styled";


 export const ProfileScreen = () => {
    const [posts, setPosts] = useState([]);

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const isFocused = useIsFocused(); 
    const userId = useSelector(selectUserId);

    const nickName = useSelector(selectName);

    useEffect(() => {
        if (isFocused) {
            getDataFromFirestore(); 
          }
    }, [isFocused])

    const getDataFromFirestore = async () => {
        try {
            let arr = [];
            const q = query(collection(db, 'posts'), where("userId", "==", userId));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => arr.push({id: doc.id, data: doc.data()}));
            setPosts(arr);
        } catch (error) {
          console.log(error.message);
                throw error;
        }
      };

      const handleLogout = () => {
        dispatch(logOut());
        navigation.navigate("Login")
      };

    return (
        <View style={styles.container}>
            <ImageBackground source={require("../../../assets/images/PhotoBG.jpg")} resizeMode="cover" 
        style={styles.bgImage}>
        <View style={styles.postListContainer}>
        <TouchableOpacity
        style={styles.logOutBtn}
        onPress={handleLogout}>
        <MaterialIcons name="logout" size={28} color="#BDBDBD" />
        </TouchableOpacity>
      <Image
        style={styles.imageAvatar}
        source={require("../../../assets/images/avatar.jpg")}/>
        <View style={styles.svg}>
        <AntDesign name="closecircleo" size={24} color="#BDBDBD" />
        </View>
        <Text style={styles.header}>{nickName}</Text>

           <FlatList data={posts} keyExtractor={(item, index) => index.toString()}
           renderItem={({item}) => {
            const locationName = item.data.locationName;
            const location = item.data.location;
            const photo = item.data.photo;
            const comments = item.data.comments;
            const numberOfComments = comments.length;
            const numberOfLikes = item.data.likes;

           return (<View style={styles.postContainer}>
            <Image source={{uri: photo}} style={styles.image}/>
            {locationName? <Text style={styles.text}>{locationName}</Text> : '' }
            <View style={styles.btnContainer}>
            <View style={styles.leftButtonsContainer}>
            <TouchableOpacity
        activeOpacity={0.7}
        style={styles.button}
        onPress={() => navigation.navigate('Коментарі', {photo: item.data.photo, postId: item.id, comments: comments || []})}
        >
        <EvilIcons name="comment" size={26} color={numberOfComments !== 0? '#FF6C00' : "#BDBDBD"} />
        <Text style={{...styles.commentText, color:numberOfComments !== 0? '#212121' : "#BDBDBD"}}>{numberOfComments || 0}</Text>
    </TouchableOpacity>

    <TouchableOpacity
        activeOpacity={0.7}
        style={{...styles.button, marginLeft: 24}}
        onPress={() => onLikePressed(item.id)}
        >
        <AntDesign name="like2" size={22} color={numberOfLikes !== 0? '#FF6C00' : "#BDBDBD"} />
        <Text style={{color: '#BDBDBD', marginLeft: 5, fontSize: 16, color: numberOfLikes !== 0? '#212121' : "#BDBDBD"}}>{numberOfLikes}</Text>
    </TouchableOpacity>
    </View>

    {location? <TouchableOpacity
        activeOpacity={0.7}
        style={styles.button}
        onPress={() => navigation.navigate('Локація', {locationName, location})}
        >
        <Ionicons name="ios-location-outline" size={26} color='#BDBDBD'/>
        <Text style={styles.locationText}>{locationName}</Text>
    </TouchableOpacity>  : '' }
            </View>
            </View>)}}/>
            </View>
            </ImageBackground>
        </View>
    )
 }

export default ProfileScreen;