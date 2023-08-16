import React, { useState, useEffect}from 'react';
import { View, TouchableOpacity, Text, TextInput, ImageBackground, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {useFonts } from 'expo-font';
import * as Font from 'expo-font';
import {styles} from './LoginScreen.styled';
import {selectIslogin} from '../../../redux/auth/authSelectors';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { authSignInUser } from '../../../redux/auth/authOperation';


const LoginScreen = ({navigation}) => {
  const { control, handleSubmit, formState: { errors }, reset  } = useForm();

  const dispatch = useDispatch();
  const isLoginTrue = useSelector(selectIslogin);

  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
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
  }

  const onSubmit = (data) => {
    dispatch(authSignInUser(data))
    if(!isLoginTrue) {
      return alert("Not found this user")
    }
    navigation.navigate("Home");
    handleHideBoard();
    reset();
  };

  const [fontsLoaded] = useFonts({
    'Roboto-Bold': require('../../../assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Regular': require('../../../assets/fonts/Roboto-Regular.ttf')
  });

  if (!fontsLoaded) {
    return null;
  };

  return (
    <TouchableWithoutFeedback onPress={handleHideBoard}>
      <View style={styles.container}>
        <ImageBackground style={styles.image} source={require('../../../assets/images/PhotoBG.jpg')}>
          <View style={{...styles.form, marginBottom: keyboardShown ? 32 : 0}}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{width: '100%'}}>
              <Text style={styles.textTitle}>Увійти</Text>
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
              {!keyboardShown && (
                <View>
                  <TouchableOpacity activeOpacity={0.7} style={styles.registBtn} 
                  onPress={handleSubmit(onSubmit)}
                  >
                    <Text style={styles.buttonText}>Увійти</Text>
                  </TouchableOpacity>
                  <View style={styles.navigate}>
                  <Text style={styles.linkText}>Немає акаунту?</Text>
                  <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
                     <Text style={styles.linkTextUnderline}>Зареєструватися</Text>
                  </TouchableOpacity>
                  </View>
                </View>
              )}
            </KeyboardAvoidingView>
          </View>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>  
  );
};

export default LoginScreen;