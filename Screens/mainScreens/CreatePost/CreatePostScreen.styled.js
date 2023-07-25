import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingLeft: 16, 
        paddingRight: 16,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    titleContant: {
        marginLeft: -195,
        marginTop: 8,
    },
    title: {
        // marginLeft: -160,
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 18.75,
        color: "#BDBDBD",
    },
    content: {
        width: "100%",
        height: 240,
        backgroundColor: "#F6F6F6",
        marginTop: 32,
        borderWidth: 1, 
        borderRadius: 8,
        borderColor: "#E8E8E8",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    cameraIcon: {
        width: 60,
        height: 60,
        backgroundColor: "#FFFFFF",
        borderRadius: 30,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    contentName: {
        marginTop:32,
        height: 50,
        width: "100%",
        borderBottomWidth: 1,
        bordeColor: "#E8E8E8",
    },
    input: {
        fontSize: 16,
        lineHeight: 18.75,
        color: "#BDBDBD",
        paddingBottom: 15,
        paddingTop: 16,
    },
    contentMap: {
        marginTop: 16,
        height: 50,
        width: "100%",
        borderBottomWidth: 1,
        bordeColor: "#E8E8E8",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: 'center',
    },
    btnView: {
    //    marginLeft: 10,
    //    marginRight: 10,
    },
    btnContainer: {
        marginTop: 32,
        display: "flex",
        justifyContent: 'center',
        alignItems: "center",
        width: 343,
        height: 50,
        backgroundColor: "#FF6C00",
        borderRadius: 25,
        // marginLeft: "auto",
        // marginRight: "auto",
    },
    btnText: {

    },
    btnTrash: {
        alignSelf: 'center',
        alignItems: 'center',
    
        width: 70,
        height: 40,
    
        paddingVertical: 8,
        paddingHorizontal: 8,
    
        backgroundColor: '#f6f6f6',
        borderRadius: 20,
        // backgroundColor: props.accessibilityState.selected ? '#f6f6f6' : '#ff6c00',
      },

})