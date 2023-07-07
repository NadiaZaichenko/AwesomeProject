import React,  { useState} from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text, TextInput, ImageBackground, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { styles } from './RegistrationScreen.styled';
import { AntDesign } from '@expo/vector-icons'; 
import { useFonts } from 'expo-font';
import * as Font from 'expo-font';

const RegistrationScreen = () => {
  const initialState = {
    name: '',
    email: '',
    password: '',
  }
  const [showBoard, setShowBoard] = useState(false);
  const [state, setState] = useState(initialState);
  const [isPasswordSecure, setIsPasswordSecure] = useState(false); 
  const [isAvatar, setIsAvatar] = useState(false)
  
  function handleShowBoardFocus (){ 
    setShowBoard(true);
  }
  function handleHideBoard (){
    Keyboard.dismiss(); 
    setShowBoard(false)
  }
  function submitForm (){
    Keyboard.dismiss(); 
    setShowBoard(false);
    console.log(state)
    setState(initialState);
  }
  const [fontsLoaded] = useFonts({
    'Roboto-Bold': require('../../assets/fonts/RobotoCondensed-Bold.ttf'),
    'Roboto-Regular': require('../../assets/fonts/RobotoCondensed-Regular.ttf')
  });

  if (!fontsLoaded) {
    return null;
  };

     return (
      <TouchableWithoutFeedback
       onPress={handleHideBoard}>

        <View style={styles.container}>

            <ImageBackground style={styles.image} source={require('../../assets/images/PhotoBG.jpg')}>
              
            <View style={{...styles.form, height: '67.61%', marginBottom: showBoard ? 116 : 0}}>

            <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"} style={{width: '100%'}}
          >
            <View style={styles.avatarContainer}>
                <Image style={styles.avatar}/>
                <TouchableOpacity >
                <AntDesign name="pluscircleo" size={24} color="#FF6C00" style={isAvatar ? styles.btnAddAvatarLoad : styles.btnAddAvatar} />
                </TouchableOpacity>
            </View>
              <Text style={styles.textTitle}>Реєстрація</Text>

                <TextInput 
                style={styles.input} 
                placeholder='Логін' 
                value={state.name}
                onFocus={handleShowBoardFocus}
                onChangeText={(value) => setState((prevState) => ({...prevState, name: value}))}/>
              
                <TextInput 
                style={styles.input} 
                placeholder='Адреса електронної пошти'
                value={state.email}
                onFocus={handleShowBoardFocus}
                onChangeText={(value) => setState((prevState) => ({...prevState, email: value}))}/>

               <View style={{...styles.passWrapper, marginBottom: showBoard ? 323 : 43 }}>
                <TextInput
                  style={styles.inputLast}
                  placeholder="Пароль"
                  onFocus={handleShowBoardFocus}secureTextEntry={isPasswordSecure} value={state.password} onChangeText={(value) => setState((prevState) => ({...prevState, password: value}))}
                />
                <TouchableOpacity style={styles.btnPassShow} onPress ={() => setIsPasswordSecure(!isPasswordSecure)}>
                  <Text style={styles.btnPassShowText}  >{isPasswordSecure ? "Показати" : "Сховати"}</Text>
                </TouchableOpacity>
              </View>
              </KeyboardAvoidingView>
              {!showBoard && (
              <View>
                <TouchableOpacity activeOpacity={0.7} style={styles.registBtn} onPress={submitForm}>
                   <Text style={styles.buttonText}>Зареєструватися</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.link}>
                    <Text style={styles.linkText}>Вже є акаунт? <Text style={styles.linkTextUnderline}>Увійти</Text>
                    </Text>
                </TouchableOpacity>
              </View>
            )}
              
                
             </View>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>  
     )  
};

export default RegistrationScreen;