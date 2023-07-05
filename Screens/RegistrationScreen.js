import React, {useState} from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text, TextInput, ImageBackground, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard} from 'react-native';
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
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);

  function submitForm (){
    setShowBoard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialState);
  }

  const [fontsLoaded] = useFonts({
    'Roboto-Bold': require('../assets/fonts/RobotoCondensed-Bold.ttf'),
    'Roboto-Regular': require('../assets/fonts/RobotoCondensed-Regular.ttf')
  });

  if (!fontsLoaded) {
    return null;
  };

     return (
      <TouchableWithoutFeedback
       onPress={() => Keyboard.dismiss()}>

        <View style={styles.container}>

            <ImageBackground style={styles.image} source={require('../assets/images/PhotoBG.jpg')}>

            <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === 'ios' ? -97 : -97}
          >
            <View style={styles.form}>

            <View style={styles.photoContainer}>
                <Image />
                <TouchableOpacity style={styles.singBtn}>
                <AntDesign name="pluscircleo" size={24} color="#FF6C00" />
                </TouchableOpacity>
            </View>
              
              <Text style={styles.textTitle}>Реєстрація</Text>
          
              <View style={{paddingTop: 16}}>
                <TextInput 
                style={styles.input} 
                placeholder='Логін' 
                value={state.name}
                onFocus={() => setShowBoard(true)}
                onChangeText={(value) => setState((prevState) => ({...prevState, name: value}))}/>
              
                <TextInput 
                style={styles.input} 
                placeholder='Адреса електронної пошти'
                value={state.email}
                onFocus={() => setShowBoard(true)}
                onChangeText={(value) => setState((prevState) => ({...prevState, email: value}))}/>

                <TextInput 
                style={styles.input} 
                secureTextEntry={isPasswordSecure} placeholder='Пароль' 
                value={state.password}
                onFocus={() => setShowBoard(true)}
                onChangeText={(value) => setState((prevState) => ({...prevState, password: value}))}/>
                <TouchableOpacity activeOpacity={0.6} onPress ={() => setIsPasswordSecure(!isPasswordSecure)}>
                  <Text style={styles.inputPassword}>{isPasswordSecure ? "Показати" : "Сховати"}</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity activeOpacity={0.6} style={styles.registBtn} onPress={submitForm}>
                   <Text style={styles.buttonText}>Зареєструватися</Text>
                </TouchableOpacity>

                <View style={{marginTop: 16,}}>
                    <Text style={{textAlign: 'center', color: '#1B4371'}}>Вже є акаунт? Увійти</Text>
                </View>
             </View>
            </KeyboardAvoidingView>
          </ImageBackground>
        </View>
      </TouchableWithoutFeedback>  
     )  
};

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      // justifyContent: "flex-end",
      backgroundColor: "#fff",
    },
    image: {
      flex: 1, 
      resizeMode: "cover",
      justifyContent: "flex-end",
    },
    photoContainer: {
      position: "relative",
      width: 120,
      height: 120,
      marginTop: -60,
      marginLeft: "auto",
      marginRight: "auto",
      backgroundColor: "#F6F6F6",
      borderRadius: 16,
    },
    form: {
      overflow: "visible",
      backgroundColor: "#fff",
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      paddingLeft: 16,
      paddingRight: 16,
      paddingBottom: 45,
    },
      textTitle: {
        textAlign: 'center',
        fontWeight: 500,
        fontSize: 30,
        color: '#212121',
        lineHeight: 35,
        marginTop: 33,
    },
      input: {
        borderWidth: 1,
        borderColor: '#E8E8E8',
        backgroundColor: '#F6F6F6',
        borderRadius: 8,
        height: 50,
        padding: 16,
        color: '#212121',
        marginTop: 16,
      },
      singBtn:{
        position: "absolute",
        bottom: 16,
        right: -12,
        backgroundColor: "#FFFFFF",
        borderRadius: 50,
      },
      buttonText: {
        alignItems: 'center',
        paddingTop: 16,
        paddingBottom: 16,
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 400,
        lineHeight: 19,
      },
       registBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF6C00',
        borderRadius: 100,
        marginTop: 27,
      },
      inputPassword: {
        position: 'absolute',
        zIndex: 99,
        top: -35,
        right: 15,
        color: "#1B4371",
        fontSize: 14,
        lineHeight: 18.75

      }
    
})

export default RegistrationScreen;