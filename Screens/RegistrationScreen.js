import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Text, TextInput, } from 'react-native';

const RegistrationScreen = () => (
        <View style={styles.container}>

            <View style={styles.photoContainer}>
                <Image />
            </View>
                <TouchableOpacity style={styles.singBtn}>
                   <Text style={styles.buttonSing} >
                    &#10011;
                   </Text>
                </TouchableOpacity>
    
            <View style={styles.form}>

              <View style={{ marginTop: 92 }}>
                <Text style={styles.textTitle}>Реєстрація</Text>
              </View>

              <View style={{marginTop: 33}}>
                <TextInput style={styles.input} placeholder='Логін'/>
              </View>

              <View style={{marginTop: 16}}>
                <TextInput style={styles.input} placeholder='Адреса електронної пошти'/>
              </View>

              <View style={{marginTop: 16}}>
                <TextInput style={styles.input} secureTextEntry={true} placeholder='Пароль' />
              </View>
              <TouchableOpacity style={styles.registBtn}>
                   <Text style={styles.buttonRegist}>Зареєструватися</Text>
                </TouchableOpacity>

                <View style={{marginTop: 16, marginBottom: 66}}>
                    <Text style={{textAlign: 'center', color: '#1B4371'}}>Вже є акаунт? Увійти</Text>
                </View>
             </View>
            

        </View>
        
    );

const styles = StyleSheet.create({
    container: {
      position: "relative",
      backgroundColor: "#fff",
      borderTopRightRadius: 25,
      borderTopLeftRadius: 25,
    },
    photoContainer: {
        position: "absolute",
        width: 120,
        height: 120,
        left: 128,
        top: -60,
        backgroundColor: '#F6F6F6',
        borderRadius: 16,
    },
      form: {
        marginHorizontal: 16,
      },
      textTitle: {
        textAlign: 'center',
        fontWeight: 500,
        fontSize: 30,
        color: '#212121',
        lineHeight: 35,
    },
      input: {
        borderWidth: 1,
        borderColor: '#E8E8E8',
        backgroundColor: '#F6F6F6',
        borderRadius: 8,
        height: 50,
        padding: 16,
        color: '#212121',
      },
      buttonSing: {
        color: '#FF6C00',
      },
      singBtn:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
        position: 'absolute',
        top: 21,
        left: 235,
        width: 25,
        height: 25,
        borderWidth: 1,
        borderColor: "#FF6C00",
        borderRadius: 25,
        backgroundColor: "#FFFFFF",
      },
      buttonRegist: {
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
        marginTop: 43,
      }
    
})

export default RegistrationScreen;