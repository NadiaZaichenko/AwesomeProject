import { KeyboardAvoidingView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { FlatList, Image,Text, TextInput } from 'react-native';
import { View } from 'react-native';
import { useEffect, useState } from 'react';
import CommentItem from '../../../component/CommentItem/CommentItem';
import { Keyboard } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { styles } from './CommentScreen.styled';
import { AntDesign } from '@expo/vector-icons';

const CommentScreen = ({ navigation, route: { params } }) => {
  const isFocused = useIsFocused();

  const [commentText, setCommentText] = useState('');
  const [comments, setComment] = useState([
    {
      autorAvatar: '',
      comment: 'Comment 1sknnn',
      date: '09 червня, 2020 | 08:40',
    },
    {
      autorAvatar: '',
      comment: 'Comment 2sknnn',
      date: '09 червня, 2020 | 08:40',
    },
    {
      autorAvatar: '',
      comment: 'Comment 3sknnn',
      date: '09 червня, 2020 | 08:40',
    },
  ]);

  useEffect(() => {
    if (isFocused) {
      navigation?.getParent('home')?.setOptions({
        tabBarStyle: { display: 'none' },
        headerShown: false,
      });
    }
  }, []);

  const handleAddComment = () => {
    if (!commentText.trim()) return console.warn('Будь ласка напишіть коментар');
    const data = {
      autorAvatar: '',
      comment: commentText,
      date: '09 червня, 2020 | 08:40',
    };

    setComment(prev => [...prev, data]);
    handleKeyboardHide();
    setCommentText('');
  };

  const handleKeyboardHide = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handleKeyboardHide}>
      <View style={styles.container}>
        <Image style={styles.postImg} source={{ uri: params.postImg }} />
        <FlatList
          style={styles.commentList}
          data={comments}
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
            <TouchableOpacity style={styles.commentBtn} onPress={handleAddComment}>
            <AntDesign name="arrowleft" size={24} color="#212121CC"/>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CommentScreen;

