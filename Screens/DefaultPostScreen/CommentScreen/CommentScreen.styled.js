import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
  
      paddingHorizontal: 16,
      paddingTop: 32,
  
      backgroundColor: '#fff',
    },
    postImg: {
      height: 240,
      width: '100%',
      marginBottom: 28,
  
      backgroundColor: '#f6f6f6',
  
      borderRadius: 8,
    },
    commentList: {
      // borderWidth: 1,
      // borderColor: '#f6f6f6',
      // borderRadius: 14,
  
      maxHeight: 312,
      marginBottom: 28,
    },
    inputCommentWrapper: {},
    commentInput: {
      position: 'relative',
      width: '100%',
      height: 50,
  
      padding: 16,
  
      backgroundColor: '#f6f6f6',
  
      borderWidth: 1,
      borderColor: '#e8e8e8',
      borderRadius: 100,
    },
    commentBtn: {
      position: 'absolute',
      right: 8,
      top: 7,
  
      paddingHorizontal: 6,
      paddingVertical: 6,
  
      backgroundColor: '#ff600c',
  
      borderRadius: 100,
    },
  
    svgArrow: {
      height: 10,
      width: 10,
  
      transform: [{ rotate: '90deg' }],
    },
  });

//   export default styles;