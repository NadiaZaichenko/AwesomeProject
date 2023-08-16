import { StyleSheet,  } from "react-native";

export const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 18,
      backgroundColor: '#fff',
  },
  image: {
      width: 343,
      height: 240,
      borderRadius: 8,
  },
  text: {
      fontSize: 16,
      fontWeight: '500',
      marginTop: 5,
  },
  button: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
  },
  btnContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 8,
      alignItems: "center",
  },
  leftButtonsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  postContainer: {
      marginTop: 25,
  },
  locationText: {
      fontSize: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#212121',
      marginLeft: 4,
  },
  commentText: {
      marginLeft: 5, 
      fontSize: 16,
  },
  mapBtn: {
    // justifyContent: "center",
    // alignItems: "center",
    // marginRight: 20,
    position: "absolute",
    top: 80,
    right: 20
  }
})