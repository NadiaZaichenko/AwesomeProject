import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    //post
    // postsWrapper: {
    //   paddingTop: 32,
    // },
    postItem: {
      marginBottom: 32,
    },
    postImg: {
      height: 240,
      maxWidth: 343,
  
      marginBottom: 8,
  
      backgroundColor: '#f6f6f6',
      borderRadius: 8,
    },
    postTitle: {
      fontFamily: 'Roboto',
      fontWeight: 500,
      fontSize: 16,
  
      marginBottom: 8,
  
      color: '#212121',
    },
    directionRow: {
      flexDirection: 'row',
    },
    postsAdditionWrapper: {
      justifyContent: 'space-between',
    },
    commentText: {
      fontFamily: 'Roboto',
      fontSize: 16,
      marginLeft: 6,
  
      color: '#bdbdbd',
    },
    locationText: {
      fontFamily: 'Roboto',
      fontSize: 16,
      textDecorationLine: 'underline',
  
      marginLeft: 4,
  
      color: '#212121',
    },
  });