import { StyleSheet,  } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
  
      paddingHorizontal: 16,
      paddingTop: 32,
  
      backgroundColor: '#fff',
    },
    avatarWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 32,
    },
    avatarImg: {
      width: 60,
      height: 60,
  
      marginRight: 8,
  
      backgroundColor: '#f6f6f6',
      borderRadius: 16,
    },
    avatarName: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: 13,
      lineHeight: 15,
  
      color: '#212121',
    },
    avatarEmail: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 400,
      fontSize: 11,
      lineHeight: 13,
  
      color: 'rgba(33, 33, 33, 0.8)',
    },
  });