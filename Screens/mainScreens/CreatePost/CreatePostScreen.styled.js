import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingLeft: 16, 
        paddingRight: 16,
        display: "flex",
        // justifyContent: "center",
        alignItems: "center",
    },
    titleContant: {
        marginLeft: -195,
        marginTop: 8,
    },
    title: {
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 18.75,
        color: "#BDBDBD",
    },
    photoContainer: {
        position: "absolute",
        top: 10,
        left: 10,
        borderWidth: 1,
        borderColor: "#FFF",
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
        marginTop: 16,
        height: 50,
        width: "100%",
        borderBottomWidth: 1,
        bordeColor: "#BDBDBD",
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
        bordeColor: "#BDBDBD",
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: 'center',
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
    },
    btnText: {
        color: "#fff",
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
      },

})