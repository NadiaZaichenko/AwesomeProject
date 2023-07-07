import React from 'react';
import { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, Text, TextInput, ImageBackground, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
// import { useFonts } from 'expo-font';
// import * as Font from 'expo-font';
import {styles} from './LoginScreen.styled'
const LoginScreen = () => {
  const initialState = {
    email: '',
    password: '',
  }
  const [state, setState] = useState(initialState);
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  const [showBoard, setShowBoard] = useState(false);
  
  useEffect(() => {
    console.log(Keyboard)
    // const boardIsShow = Keyboard.addEventListener('keyboardWillShow', () => { 
    //   setShowBoard(true);
    //   // console.log(showBoard);
    // });
    // const boardIsHide =  Keyboard.addEventListener('keyboardWillHide', () => {
    //   setShowBoard(false);
    //   // console.log(showBoard);
    // });
    //  return () => {
    //     boardIsShow.removeEventListener();
    //     boardIsHide.removeEventListener();
    //  } 
  }, []);

  function submitForm (){
    Keyboard.dismiss(); 
    setState(initialState);
  }
    console.log(state);
    console.log(showBoard);
  // const [fontsLoaded] = useFonts({
  //   'Roboto-Bold': require('../assets/fonts/RobotoCondensed-Bold.ttf'),
  //   'Roboto-Regular': require('../assets/fonts/RobotoCondensed-Regular.ttf')
  // });

  // if (!fontsLoaded) {
  //   return null;
  // };

     return (
      <TouchableWithoutFeedback
       onPress={() => Keyboard.dismiss()}>

        <View style={styles.container}>

            <ImageBackground style={styles.image} source={require('../../assets/images/PhotoBG.jpg')}>
            
            <View style={{...styles.form}}>

           
            <View style={styles.photoContainer}>
                <Image />
                <TouchableOpacity style={styles.singBtn}>
                <AntDesign name="pluscircleo" size={24} color="#FF6C00" />
                </TouchableOpacity>
            </View>
              <Text style={styles.textTitle}>Увійти</Text>
              
              <View style={{paddingTop: 16}}>
             <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
                <TextInput 
                style={styles.input} 
                placeholder='Адреса електронної пошти'
                value={state.email}
                onFocus={() => console.log(showBoard)}
                onChangeText={(value) => setState((prevState) => ({...prevState, email: value}))}/>

                <TextInput 
                style={{...styles.input, marginBottom: showBoard ? 50 : 0}} 
                secureTextEntry={isPasswordSecure} placeholder='Пароль' 
                value={state.password}
                onChangeText={(value) => setState((prevState) => ({...prevState, password: value}))}/>
                <TouchableOpacity activeOpacity={0.6} onPress ={() => setIsPasswordSecure(!isPasswordSecure)}>
                  <Text style={styles.inputPassword}>{isPasswordSecure ? "Показати" : "Сховати"}</Text>
                </TouchableOpacity>  
                 </KeyboardAvoidingView>
              </View>

          
              <TouchableOpacity activeOpacity={0.7} style={styles.registBtn} onPress={submitForm}>
                   <Text style={styles.buttonText}>Увійти</Text>
                </TouchableOpacity>

                <View style={{marginTop: 16,}}>
                    <Text style={{textAlign: 'center', color: '#1B4371'}}>Вже є акаунт? Увійти</Text>
                </View>
      
             </View>
            
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>  
     )  
};


export default LoginScreen;
