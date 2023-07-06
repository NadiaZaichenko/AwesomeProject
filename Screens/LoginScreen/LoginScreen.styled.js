import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: "#fff",
    },
    image: {
      flex: 1, 
      resizeMode: "cover",
      justifyContent: "flex-end",
    },
    keyBoardContainer: {
      paddingBottom: 30,
    },
    photoContainer: {
      position: "relative",
      width: 120,
      height: 120,
      marginTop: -60,
      marginLeft: "auto",
      marginRight: "auto",
      backgroundColor: "#F6F6F6",
      borderRadius: 16,
    },
    form: {
      overflow: "visible",
      backgroundColor: "#fff",
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      paddingLeft: 16,
      paddingRight: 16,
      paddingBottom: 111,
    },
      textTitle: {
        textAlign: 'center',
        fontWeight: 500,
        fontSize: 30,
        color: '#212121',
        lineHeight: 35,
        marginTop: 33,
    },
      input: {
        borderWidth: 1,
        borderColor: '#E8E8E8',
        backgroundColor: '#F6F6F6',
        borderRadius: 8,
        height: 50,
        padding: 16,
        color: '#212121',
        marginTop: 16,
      },
      singBtn:{
        position: "absolute",
        bottom: 16,
        right: -12,
        backgroundColor: "#FFFFFF",
        borderRadius: 50,
      },
      buttonText: {
        alignItems: 'center',
        paddingTop: 16,
        paddingBottom: 16,
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 400,
        lineHeight: 19,
      },
       registBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF6C00',
        borderRadius: 100,
        marginTop: 27,
      },
      inputPassword: {
        position: 'absolute',
        zIndex: 99,
        top: -35,
        right: 15,
        color: "#1B4371",
        fontSize: 14,
        lineHeight: 18.75

      }
    
})
