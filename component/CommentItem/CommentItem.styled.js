import { StyleSheet, Dimensions } from "react-native";

export const styles = StyleSheet.create({
    commentItem: {
      width: '100%',
      flexDirection: 'row',
      marginBottom: 24,
    },
    avatar: {
      width: 28,
      height: 28,
  
      marginRight: 16,
  
      backgroundColor: '#f6f6f6',
      borderRadius: 100,
      overflow: 'hidden',
    },
    commentWrapper: {
      padding: 16,
      width: '100%',
  
      backgroundColor: 'rgba(0, 0, 0, 0.03)',
      borderRadius: 6,
  
      width: Dimensions.get('window').width - 76,
    },
    commentText: {
      fontFamily: 'Roboto',
      fontSize: 13,
      lineHeight: 18,
      color: '#212121',
    },
    commentDate: {
      fontFamily: 'Roboto',
      fontSize: 10,
      textAlign: 'right',
      color: '#BDBDBD',
    },
  });