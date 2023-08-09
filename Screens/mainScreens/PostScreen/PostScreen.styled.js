import { StyleSheet } from "react-native"

export const styles =StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    title: {
        fontFamily: "Roboto-Bold",
        fontWeight: 500,
        lineHeight: 22,
        fontSize: 17,
        color: "#212121",
        paddingTop: 15,
    },
    div: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        // alignItems: "center",
        height: 90,
        width: "100%",
        borderBottomWidth: 1,
        borderColor: "#BDBDBD",
    }, 
    user: {
        width: 171,
        height: 60,
        marginTop: 20,
        flexDirection: "row",
        paddingLeft: 16,
        marginTop: 32,
        alignItems: "center",
    },
    avatar:{
        width: 60,
        height:60,
        borderRadius: 16,
    },
    inform:{
        paddingLeft: 8,
    },
    name:{
        color: "#212121",
        fontFamily: "Roboto-Regular",
        fontSize: 13,
        fontWeight: 700,
    },
    email: {
      fontSize: 11,
      fontWeight: 400,
      lineHeight: 12.89,
      color: "#212121",
    },
    photo: {
        marginHorizontal: 10,
        height: 200,
        marginTop: 16,
        backgroundColor: "#000",
    },
    arrowLeft: {
        marginLeft: 16,
        marginRight: 76,
        paddingHorizontal: 16,
        paddingVertical: 10,
      },
})