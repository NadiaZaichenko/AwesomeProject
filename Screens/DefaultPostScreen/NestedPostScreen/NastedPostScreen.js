import { FlatList, Image, Text, View, TouchableOpacity } from 'react-native';
import { styles } from './NestedPostScreen.styled';
import { useEffect, useState } from 'react';
import { collection, getDocs, updateDoc, doc, getDoc } from 'firebase/firestore';
import { db } from '../../../firebase/config';
import { useNavigation, useIsFocused  } from '@react-navigation/native';
import { Feather, EvilIcons, AntDesign} from '@expo/vector-icons';

const NestedPostScreen = ({ route }) => {
  const [posts, setPosts] = useState([]);
  const navigation = useNavigation();
  const isFocused = useIsFocused(); 

  useEffect(() => {
    if (isFocused) {
        getDataFromFirestore(); 
      }
}, [])

const getDataFromFirestore = async () => {
  try {
  try {
      const snapshot = await getDocs(collection(db, 'posts'));
      let arr = [];
      snapshot.forEach((doc) => arr.push({ id: doc.id, data: doc.data()}));
      setPosts(arr);
  } catch (error) {
    console.log(error.message);
    throw error;
  }
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

const onLikePressed = async (postId) => {
  try {
      const postRef = doc(db, "posts", postId);
      const postSnapshot = await getDoc(postRef);
      const postLikes = postSnapshot.data().likes;
      const updatedLikes = Number(postLikes + 1);
  
      await updateDoc(postRef, {
        likes: updatedLikes,
      });
      console.log("Document likes updated");
    } catch (error) {
      console.error("Error adding like:", error);
    }
}


return (
  <View style={styles.container}>
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
  onPress={() => navigation.navigate('Comments', {photo: item.data.photo, postId: item.id, comments})}
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
  <Text style={{...styles.commentText, color:numberOfComments !== 0? '#212121' : "#BDBDBD"}}>{numberOfLikes || 0}</Text>
</TouchableOpacity>
</View>

{location ? <TouchableOpacity
  activeOpacity={0.7}
  style={{...styles.button, marginRight: 30}}
  onPress={() => navigation.navigate('Map', {locationName, location})}
  >
<Feather name="map-pin" size={22} color='#BDBDBD'/>
  <Text style={styles.locationText}>{locationName}</Text>
</TouchableOpacity>  : <Text style={styles.locationText}>Not location</Text> }
      </View>
    </View>)}}/>
  </View>
)
}
export default NestedPostScreen;

