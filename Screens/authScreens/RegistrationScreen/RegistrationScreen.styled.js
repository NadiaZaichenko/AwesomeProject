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
    avatarContainer: {
      
        position: 'absolute',
        top: -60,
        alignSelf: 'center',
        width: 120,
        height: 120,
        backgroundColor: '#f6f6f6',
        borderRadius: 16,
    },
    avatar: {
        borderRadius: 16,
        width: 120,
        height: 120,
    },
    btnAddAvatar: {
        position: 'absolute',
        top: 90,
        right: -12.5,
        alignItems: 'center',
        alignContent: 'center',
    },
    btnAddAvatarLoad: {
        position: 'absolute',
        bottom: 10,
        right: -12.5,
        alignItems: 'center',
        alignContent: 'center',
        // transform: [{ rotate: '45deg' }],
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
        fontFamily: 'Roboto-Bold',
        textAlign: 'center',
        fontWeight: 500,
        fontSize: 30,
        color: '#212121',
        lineHeight: 35,
        marginTop: 92,
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
      },
      navigate:{
        justifyContent: 'center',
        marginTop: 16,
        display:"flex",
        flexDirection: "row",
      }
})
