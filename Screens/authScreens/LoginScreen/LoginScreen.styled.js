import {  Dimensions, StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
      flex: 1, 
    },
    image: {
      width: '100%',
      height: '100%',
      flexDirection: 'row',
      alignItems: 'flex-end',
      resizeMode: 'cover',
      justifyContent: 'center',
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
    form: {
      paddingHorizontal: 16,
      width: '100%',
      backgroundColor: '#fff',
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      height: '60.22%',
    },
      textTitle: {
        // fontFamily: 'Roboto-Bold',
        textAlign: 'center',
        fontWeight: 500,
        fontSize: 30,
        color: '#212121',
        lineHeight: 35,
        marginTop: 32,
        marginBottom: 32,
    },
      input: {
        borderWidth: 1,
        borderColor: '#E8E8E8',
        backgroundColor: '#F6F6F6',
        borderRadius: 8,
        height: 50,
        padding: 16,
        color: '#212121',
        fontSize: 16,
        marginBottom: 16,
      },
      inputLast: {
        borderWidth: 1,
        borderColor: '#E8E8E8',
        backgroundColor: '#F6F6F6',
        borderRadius: 8,
        height: 50,
        padding: 16,
        fontSize: 16,
        color: '#212121',
        marginBottom: 0,
      },
      passWrapper: {
        marginBottom: 323,
      },
      singBtn:{
        position: "absolute",
        bottom: 16,
        right: -12,
        backgroundColor: "#FFFFFF",
        borderRadius: 50,
      },
      buttonText: {
        color: '#ffffff',
        fontSize: 16,
      },
       registBtn: {
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#ff6c00',
        borderRadius: 100,
      },
      btnPassShow: {
        position: 'absolute',
        right: 0,
        top: 0,
        alignSelf: 'center',
        padding: 16,
        backgroundColor: 'transparent',
      },
      btnPassShowText: {
        color: '#1B4371',
        fontSize: 16,
      },
      link: {
        alignItems: 'center',
    
        marginTop: 16,
      },
      linkText: {
        color: '#1B4371',
      },
      linkTextUnderline: {
        textDecorationLine: 'underline',
      },
      errorText: {
        fontSize: 14,
        color: '#ff6c00',
      }
})
