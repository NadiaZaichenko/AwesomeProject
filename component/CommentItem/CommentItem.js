import { View, Image, Text } from 'react-native';
import { styles } from './CommentItem.styled';

const CommentItem = ({ autorAvatar, comment, date }) => {
  return (
    <View style={styles.commentItem}>
      <Image style={styles.avatar} />
      <View style={styles.commentWrapper}>
        <Text style={styles.commentText}>{comment}</Text>
        <Text style={styles.commentDate}>{date}</Text>
      </View>
    </View>
  );
};

export default CommentItem;

