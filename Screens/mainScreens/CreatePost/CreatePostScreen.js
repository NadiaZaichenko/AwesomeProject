import React , {useState} from "react";
import {View, Text, TextInput, TouchableOpacity, Image} from "react-native";
import { styles } from "./CreatePostScreen.styled";
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Camera } from "expo-camera";
// import * as MediaLibrary from 'expo-media-library';




const CreatePostScreen = () => {
    const [camera, setCamera] = useState(null);
    const [photo, setPhoto] = useState("");
   

    const todoPhoto = async () => {
        if (camera) {
            try {
              const { uri } = await camera.takePictureAsync(); 
              setPhoto(uri);
              console.log(uri);
            } catch (error) {
              console.log('Error > ', error.message);
            }
          }
    };

    return (
        <View style={styles.container}>

            <Camera style={styles.content} ref={setCamera}>
               {photo && 
                <View style={styles.photoContainer}>
                    <Image source={{ uri: photo }} style={{height: 120, width: 120}}/>
                </View>}
                
                <TouchableOpacity style={styles.cameraIcon} onPress={todoPhoto}>
                    <FontAwesome name="camera" size={24} color="#BDBDBD" />
                </TouchableOpacity>
            </Camera>
                
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
                    <Text style={styles.btnText}>Опублікувати</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


export default CreatePostScreen;
