import React,  { useState, useEffect} from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text, TextInput, ImageBackground, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { styles } from './RegistrationScreen.styled';
import { AntDesign } from '@expo/vector-icons'; 
import { useFonts } from 'expo-font';
import * as Font from 'expo-font';
import { Controller, useForm } from 'react-hook-form';

const RegistrationScreen = ({ navigation }) => {
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [isPasswordSecure, setIsPasswordSecure] = useState(true); 
  const [isAvatar, setIsAvatar] = useState(null);
  const [keyboardShown, setKeyboardShown] = useState(false);

  const { control, handleSubmit, reset, formState: {errors}} = useForm()

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
 

  function submitForm (data){
    console.log(data)
    handleHideBoard();
    reset();
  }
  const [fontsLoaded] = useFonts({
    'Roboto-Bold': require('../../../assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Regular': require('../../../assets/fonts/Roboto-Regular.ttf')
  });

  if (!fontsLoaded) {
    return null;
  };

     return (
      <TouchableWithoutFeedback
       onPress={handleHideBoard}>

        <View style={styles.container}>

            <ImageBackground style={styles.image} source={require('../../../assets/images/PhotoBG.jpg')}>
              
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

              <Controller
              control={control}
              name="name"
              rules={{ required: {value: true, message: "Ім'я обов'язкове"}}}
              render= {({field}) => (
                <View>
                  <TextInput 
                style={styles.input} 
                autoCapitalize="none"
                placeholder='Логін' 
                value={field.value}
                onChangeText={field.onChange}
                onBlur={field.onBlur}/>
                 {errors.name && <Text style={styles.errorText}>{errors.name.message}</Text>}
                </View>
              )}
              />

<Controller 
                control={control}
                name="email"
                rules={{
                  required: { value: true, message: 'Адреса електронної пошти обов\'язкова' },
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Некоректна адреса електронної пошти',
                  },
                }}
                render={({ field }) => (
                  <View>
                    <TextInput
                      style={styles.input}
                      autoComplete="email"
                      autoCapitalize="none"
                      placeholder='Адреса електронної пошти'
                      value={field.value}
                      onChangeText={field.onChange}
                      onBlur={field.onBlur}
                    />
                    {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}
                  </View>
                )}
              />
               <View style={{...styles.passWrapper, marginBottom: keyboardShown ? 323 : 43 }}>
                <Controller
                  control={control}
                  name="password"
                  rules={{ required: { value: true, message: 'Пароль обов\'язковий' } }}
                  render={({ field }) => (
                    <View>
                      <TextInput
                        style={styles.inputLast}
                        autoCapitalize="none"
                        placeholder="Пароль"
                        secureTextEntry={isPasswordSecure}
                        value={field.value}
                        onChangeText={field.onChange}
                        onBlur={field.onBlur}
                      />
                      {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}
                    </View>
                  )}
                />
                <TouchableOpacity style={styles.btnPassShow} onPress={() => setIsPasswordSecure(!isPasswordSecure)}>
                  <Text style={styles.btnPassShowText}>{isPasswordSecure ? "Показати" : "Сховати"}</Text>
                </TouchableOpacity>
              </View>
              </KeyboardAvoidingView>
              {!keyboardShown && (
              <View>
                <TouchableOpacity activeOpacity={0.7} style={styles.registBtn} onPress={handleSubmit(submitForm)}>
                   <Text style={styles.buttonText}>Зареєструватися</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.link} onPress={() => navigation.navigate('Login')}>
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