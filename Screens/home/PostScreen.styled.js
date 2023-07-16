import { StyleSheet } from "react-native"

export const styles =StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
       
    },
    title: {
        fontWeight: 500,
        lineHight: 22,
        fontSize: 17,
        color: "#000",
        paddingLeft: 49,
        paddingRight: 50,
        paddingTop: 11,
        paddingBottom: 11,
    },
    div: {
        flex: 2,
        marginTop: 30,
        justifyContent: 'flex-start',
        alignItems: 'center',
        // borderColor: "#0000004D",
        border: "5px solid #0000004D",
    }
})