import { KeyboardAvoidingView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { FlatList, Image,Text, TextInput } from 'react-native';
import { View } from 'react-native';
import { useEffect, useState } from 'react';
import CommentItem from '../../../component/CommentItem/CommentItem';
import { updateDoc, doc } from 'firebase/firestore';
import { db } from '../../../firebase/config';
import { Keyboard } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { styles } from './CommentScreen.styled';
import { AntDesign } from '@expo/vector-icons';

const CommentScreen = ({ route }) => {
  const isFocused = useIsFocused();

  const [commentText, setCommentText] = useState('');
  const [allComments, setAllComments] = useState([]);

  const {photo} = route.params;
  const {postId} = route.params;
  const {comments} =  route.params;
  const {postImg} = route.params;

  useEffect(() => {
    if (comments && comments.length > 0) {
      setAllComments(comments)
    }
  }, [comments])

  // const handleAddComment = () => {
  //   if (!commentText.trim()) return console.warn('Будь ласка напишіть коментар');
  //   const data = {
  //     autorAvatar: '',
  //     comment: commentText,
  //     date: '09 червня, 2023 | 08:40',
  //   };

  //   setAllComments(prev => [...prev, data]);
  //   handleKeyboardHide();
  //   setCommentText('');
  // };

  const createComment = async () => {
    // keyBoardHide();
    const commentData = {
      time: new Date(),
      comment: commentText,
      id: postId,
    };
    setAllComments((prevState) => [...prevState, commentData]);
    try {
      const postRef = doc(db, "posts", postId);
      await updateDoc(postRef, {
        comments: [...comments, commentData],
      });
      console.log("document updated");
    } catch (error) {
      console.error("Error adding comment:", error);
    }
    setCommentText('');
    };


  const handleKeyboardHide = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handleKeyboardHide}>
      <View style={styles.container}>
        <Image style={styles.postImg} source={{ uri: postImg }} />
        <FlatList
          style={styles.commentList}
          data={allComments}
          renderItem={({ item }) => (
            <CommentItem comment={item.comment} date={item.date} autorAvatar={item.autorAvatar} />
          )}
          keyExtractor={(item, idx) => idx.toString()}
        />
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyboardView}
        >
          <View style={styles.inputCommentWrapper}>
            <TextInput
              style={styles.commentInput}
              placeholder="Коментувати..."
              placeholderTextColor="#bdbdbd"
              autoComplete="off"
              value={commentText}
              onChangeText={setCommentText}
            />
            <TouchableOpacity activeOpacity={0.7} style={styles.commentBtn} onPress={createComment}>
            <AntDesign name="arrowup" size={22} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CommentScreen;

