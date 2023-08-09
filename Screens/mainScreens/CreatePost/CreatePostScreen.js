import React , {useState, useEffect} from "react";
import {View, Text, TextInput, TouchableOpacity, Image} from "react-native";
import { styles } from "./CreatePostScreen.styled";
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Camera } from "expo-camera";
import * as Location from 'expo-location';
// import * as MediaLibrary from 'expo-media-library';




const CreatePostScreen = ({navigation}) => {
    const [camera, setCamera] = useState(null);
    const [photo, setPhoto] = useState("");
    // const [location, setLocation] = useState(null)
   

    const todoPhoto = async () => {
        if (camera) {
            try {
              const { uri } = await camera.takePictureAsync(); 
              const location = await Location.getCurrentPositionAsync();
              console.log(location);
              setPhoto(uri);
              console.log(uri);
            } catch (error) {
              console.log('Error > ', error.message);
            }
          }
    };

    const sendPhoto = () => {
        navigation.navigate("Публікації", { photo })
    }

    // useEffect(() => {
    //     (async () => {
          
    //       let { status } = await Location.requestForegroundPermissionsAsync();
    //       if (status !== 'granted') {
    //         setErrorMsg('Permission to access location was denied');
    //         return;
    //       }
    
    //       let location = await Location.getCurrentPositionAsync({});
    //       setLocation(location);
    //     })();
    //   }, []);

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
                <TouchableOpacity style={styles.btnContainer} onPress={sendPhoto}>
                    <Text style={styles.btnText}>Опублікувати</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


export default CreatePostScreen;
