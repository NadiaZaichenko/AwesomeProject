import { StyleSheet } from "react-native";

export  const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
    bgImage: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingTop: 177,
    },
    image: {
        width: 343,
        height: 240,
        borderRadius: 8,
    },
    imageAvatar: {
        width: 120,
        height: 120,
        position: 'absolute',
        alignSelf: 'center',
        top: -60,
        backgroundColor: '#F6F6F6',
        borderRadius: 16,
      },
    svg: {
        position: 'absolute',
        width: 25,
        height: 25,
        left: 240,
        top: 23,
        backgroundColor: '#fff',
        borderRadius: 50,
        borderColor: 'transparent',
      },
    logOutBtn: {
        marginRight: 15, 
        position: 'absolute',
        right: 16,
        top: 22,
    },
    postListContainer: {
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 18,
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    header: {
        color: 'black',
        marginTop: 92,
        marginBottom: 25,
        fontSize: 30,
        lineHeight: 35,
        fontWeight: '500',
        textAlign: 'center',
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
    }

 })