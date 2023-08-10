import { useEffect, useState } from 'react';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import { styles } from "./CreatePostScreen.styled";

import * as Location from 'expo-location';

// import * as DocumentPicker from 'expo-document-picker';
import {  Image, Keyboard, KeyboardAvoidingView} from 'react-native';

import { TouchableWithoutFeedback, TextInput, TouchableOpacity, Text, View } from 'react-native';

const CreatePostScreen = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);

  const [postImg, setPostImg] = useState('');
  const [postName, setPostName] = useState('');
  const [postAddress, setPostAddress] = useState('');
  const [postLocation, setPostLocation] = useState(null);

  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [currentFocused, setCurrentFocused] = useState('');

  useEffect(() => {
    setPostImg('');
    setPostLocation(null);

    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === 'granted');
    })();

    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
      }
    })();
  }, []);

  const addImageLocation = async () => {
    const location = await Location.getCurrentPositionAsync({});
    const coords = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };

    const [address] = await Location.reverseGeocodeAsync({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });

    setPostAddress(address.city);
    setPostLocation(coords);
  };

  const clearForm = () => {
    setPostImg('');
    setPostName('');
    setPostAddress('');
    setPostLocation(null);
  };

  const onSubmitPost = () => {
    if (!postImg || !postName.trim() || !postLocation)
      return console.warn('Будь ласка завантажте фото та заповніть поля');

    console.log({ postImg, postName, postAddress, postLocation });

    handleKeyboardHide();
    navigation.navigate('NestedPostScreen', {
      postImg,
      postName: postName.trim(),
      postAddress: postAddress.trim(),
      postLocation,
    });
    clearForm();
  };

  const onLoadPostImg = async () => {
    if (cameraRef) {
      try {
        const { uri } = await cameraRef.takePictureAsync();
        await MediaLibrary.createAssetAsync(uri);
        setPostImg(uri);
      } catch (error) {
        console.log('Error > ', error.message);
      }
    }
    addImageLocation();
  };

  const handleFocus = (currentFocusInput = '') => {
    setIsShowKeyboard(true);
    setCurrentFocused(currentFocusInput);
  };
  const handleKeyboardHide = () => {
    setIsShowKeyboard(false);
    setCurrentFocused('');
    Keyboard.dismiss();
  };
  const handleGoBack = () => {
    clearForm();
    navigation.goBack();
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text> No access to camera</Text>;
  }
  return (
    <TouchableWithoutFeedback onPress={handleKeyboardHide}>
      <View
        style={{
          ...styles.container,
          justifyContent: isShowKeyboard ? 'center' : 'flex-start',
        }}
      >
        <View style={styles.loadWrapper}>
          <View style={styles.postImgWrapper}>
            {postImg ? (
              <>
                <Image style={styles.bgImage} source={{ uri: postImg }} />
                <TouchableOpacity
                  style={{
                    ...styles.loadBtn,
                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                  }}
                  onPress={onLoadPostImg}
                >
                   <FontAwesome name="camera" size={24} color='#ffffff'  />
                </TouchableOpacity>
              </>
            ) : (
              isFocused && (
                <Camera
                  style={styles.camera}
                  ratio="1:1"
                  zoom={0}
                  type={Camera.Constants.Type.back}
                  ref={setCameraRef}
                >
                  <TouchableOpacity
                    style={{
                      ...styles.loadBtn,
                      backgroundColor: postImg ? 'rgba(255, 255, 255, 0.3)' : '#ffffff',
                    }}
                    onPress={onLoadPostImg}
                  >
                       <FontAwesome name="camera" size={24} color={postImg ? '#ffffff' : '#bdbdbd'}  />
                  </TouchableOpacity>
                </Camera>
              )
            )}
          </View>
          <Text style={styles.loadWrapperText}>
            {postImg ? 'Редагувати фото' : 'Завантажте фото'}
          </Text>
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyboardView}
        >
          <View>
            <TextInput
              style={{
                ...styles.input,
                borderColor: currentFocused === 'postName' ? '#ff6c00' : '#e8e8e8',
              }}
              placeholderTextColor="#bdbdbd"
              placeholder="Назва..."
              autoComplete="off"
              autoCapitalize="none"
              value={postName}
              onChangeText={setPostName}
              onFocus={() => handleFocus('postName')}
            />
            <View
              style={{
                ...styles.locationInputWrapper,
                borderColor: currentFocused === 'location' ? '#ff6c00' : '#e8e8e8',
              }}
            >
            <Feather name="map-pin" size={22} color="#BDBDBD"  style={styles.btnLoaction}/>
              <TextInput
                style={styles.inputLocation}
                placeholderTextColor="#bdbdbd"
                placeholder="Місцевість..."
                autoComplete="off"
                autoCapitalize="none"
                value={postAddress}
                onChangeText={setPostAddress}
                onFocus={() => handleFocus('location')}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
        <TouchableOpacity
          style={{
            ...styles.btn,
            backgroundColor: !postImg || !postName.trim() || !postLocation ? '#f6f6f6' : '#ff6c00',
          }}
          onPress={onSubmitPost}
        >
          <Text
            style={{
              ...styles.btnText,
              color: !postImg || !postName.trim() || !postLocation ? '#bdbdbd' : '#ffffff',
            }}
          >
            Опубліковати
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnTrash} onPress={handleGoBack}>
        <Feather name="trash-2" 
   color="#dbdbdb" size={24} />
          {/* <SvgTrash stroke={'#dbdbdb'} /> */}
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CreatePostScreen;