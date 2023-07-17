import React from "react";
import {View, Text, StyleSheet} from "react-native";


const CreatePostScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create Post Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 30,
        color: "#000",
    }

})

export default CreatePostScreen;
