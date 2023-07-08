import React,  { useState, useEffect} from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text, TextInput, ImageBackground, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { styles } from './RegistrationScreen.styled';
import { AntDesign } from '@expo/vector-icons'; 
import { useFonts } from 'expo-font';
import * as Font from 'expo-font';

const RegistrationScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordSecure, setIsPasswordSecure] = useState(true); 
  const [isAvatar, setIsAvatar] = useState(null);
  const [keyboardShown, setKeyboardShown] = useState(false);

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
  };
  function clearInputs() {
    setEmail('');
    setName('');
    setPassword('');
  }

  function submitForm (){
    if(!email || !name || !password)
      return console.warn('Будь ласка внесіть дані');
    console.log({name, email,password})
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
              
            <View style={{...styles.form, height: '67.61%', marginBottom: keyboardShown ? 116 : 0}}>

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
                value={name}
                onChangeText={(value) => setName(value)}/>
              
                <TextInput 
                style={styles.input} 
                placeholder='Адреса електронної пошти'
                value={email}
                onChangeText={(value) => setEmail(value)}/>

               <View style={{...styles.passWrapper, marginBottom: keyboardShown ? 323 : 43 }}>
                <TextInput
                  style={styles.inputLast}
                  placeholder="Пароль"
                  secureTextEntry={isPasswordSecure} value={password} onChangeText={(value) => setPassword(value)}
                />
                <TouchableOpacity style={styles.btnPassShow} onPress ={() => setIsPasswordSecure(!isPasswordSecure)}>
                  <Text style={styles.btnPassShowText}  >{isPasswordSecure ? "Показати" : "Сховати"}</Text>
                </TouchableOpacity>
              </View>
              </KeyboardAvoidingView>
              {!keyboardShown && (
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