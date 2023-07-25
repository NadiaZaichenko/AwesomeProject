import React from "react";
import {View, Text, TextInput, TouchableOpacity} from "react-native";
import { styles } from "./CreatePostScreen.styled";
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';



const CreatePostScreen = () => {
    return (
        <View style={styles.container}>
                    <View style={styles.content}>
                        <View style={styles.cameraIcon}>
                        <FontAwesome name="camera" size={24} color="#BDBDBD" />
                        </View>
                    </View>
                
            <View style={styles.titleContant}>
                 <Text style={styles.title}>Завантажте фото</Text>
            </View>
            <View style={styles.contentName}>
                <TextInput style={styles.input} placeholder='Назва...'></TextInput>
            </View>
            <View style={styles.contentMap}>
                <Feather name="map-pin" size={22} color="#BDBDBD"  style={{marginRight: 5}}/>
                <TextInput style={styles.input} placeholder='Місцевість' >
                </TextInput>
            </View>

            <View stylele={styles.btnView}>
                <TouchableOpacity style={styles.btnContainer}>
                    <Text>Опублікувати</Text>
                </TouchableOpacity>
            </View>
           
            {/* <View stylele={styles.btnView}>
                <TouchableOpacity style={styles.btnTrash}>
                <Feather name="trash-2" size={24} color="black" />
                </TouchableOpacity>
            </View> */}
        </View>
    )
}


export default CreatePostScreen;
