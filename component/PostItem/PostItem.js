import { TouchableOpacity, View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { styles } from './PostItem.styled';

const PostsItem = ({ postImg, postName, postAddress, postLocation }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.postItem}>
      <Image style={styles.postImg} source={{ uri: postImg }} />
      <Text style={styles.postTitle}>{postName}</Text>
      <View style={{ ...styles.postsAdditionWrapper, ...styles.directionRow }}>
        <TouchableOpacity
          style={{ ...styles.comment, ...styles.directionRow }}
          onPress={() => navigation.navigate('Comments', { postImg })}
        >
          <Feather name="message-circle" size={24} color="black" />
          <Text style={styles.commentText}>Comments</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...styles.location, ...styles.directionRow }}
          onPress={() => navigation.navigate('Map', { postLocation })}
        >
          <EvilIcons name="location" size={24} color="black" />
          <Text style={styles.locationText}>{postAddress}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostsItem;
