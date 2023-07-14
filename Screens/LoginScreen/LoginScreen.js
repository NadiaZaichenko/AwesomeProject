import React, { useState, useEffect}from 'react';
import { View, TouchableOpacity, Text, TextInput, ImageBackground, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { unloadAllAsync, useFonts } from 'expo-font';
import * as Font from 'expo-font';
import {styles} from './LoginScreen.styled'
import { useForm } from 'react-hook-form';
// import * as yup  from 'yup';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  const [keyboardShown, setKeyboardShown] = useState(false);
  
  // const validateEmail = () => {
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if (!emailRegex.test(email)) {
  //     console.log('Ошибка', 'Некорректный email');
  //   }
  // };

  // const validatePassword = () => {
  //   if (password.length < 6) {
  //     console.log('Ошибка', 'Пароль должен содержать не менее 6 символов');
  //   }
  // };

  // const handleLogin = () => {
  //   validateEmail();
  //   validatePassword();
  // }

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', handleKeyboardDidShow);
    Keyboard.addListener('keyboardDidHide', handleKeyboardDidHide);
    return () => {
      Keyboard.removeListener('keyboardDidShow', handleKeyboardDidShow);
      Keyboard.removeListener('keyboardDidHide', handleKeyboardDidHide);
    };
  }, []);

  const handleKeyboardDidShow = () => {
    setKeyboardShown(true);
  };

  const handleKeyboardDidHide = () => {
    setKeyboardShown(false);
  };

  function handleHideBoard (){
    Keyboard.dismiss(); 
  }
  function clearInputs() {
    setEmail('');
    setPassword('');
  }
  function submitForm (){
    if(email === " " || password === ""){
      console.warn('Будь ласка заповніть поля')
    }
    if(email !== emailRegex || password.length >0 <6) {
      console.warn('Будь ласка перевірте заповнені поля')
    }
      console.log({email, password});
      handleHideBoard();
      clearInputs();
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
            
            <View style={{...styles.form, marginBottom: keyboardShown ? 32 : 0}}>
              
            <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"} style={{width: '100%'}}
          >
              <Text style={styles.textTitle}>Увійти</Text>

                <TextInput 
                style={styles.input} 
                autoComplete="email"
                autoCapitalize="none"
                placeholder='Адреса електронної пошти'
                value={email}
                onChangeText={(value) => setEmail(value)}
                />

               <View style={{...styles.passWrapper, marginBottom: keyboardShown ? 323 : 43 }}>
                <TextInput
                  style={styles.inputLast}
                  autoCapitalize="none"
                  placeholder="Пароль"
                  secureTextEntry={isPasswordSecure} 
                  value={password}
                   onChangeText={(value) => setPassword(value)}
                />
                <TouchableOpacity style={styles.btnPassShow} onPress ={() => setIsPasswordSecure(!isPasswordSecure)}>
                  <Text style={styles.btnPassShowText}  >{isPasswordSecure ? "Показати" : "Сховати"}</Text>
                </TouchableOpacity>
                {/* <View>{errors?.password && <Text>{errors.password.message}</Text> }</View> */}
              </View>
          
           </KeyboardAvoidingView>

            {!keyboardShown && (
              <View>
                <TouchableOpacity activeOpacity={0.7} style={styles.registBtn} onPress={submitForm}>
                   <Text style={styles.buttonText}>Увійти</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.link}>
                    <Text style={styles.linkText}>Немає акаунту? <Text style={styles.linkTextUnderline}>Зареєструватися</Text>
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


export default LoginScreen;
