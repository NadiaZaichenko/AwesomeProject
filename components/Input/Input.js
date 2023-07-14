import {Text, View, TextInput, Button, Alert} from "react-native";
import { useState } from "react";
import {useForm, Controller} from "react-hook-form";
import { styles } from "./Input.styled";
// import { styles } from "../Screens/LoginScreen/LoginScreen.styled";

export default function Input ({control, name, placeholder, secureTextEntry = false, isPassword = false, toggleShowPassword, show }) {
    const [focus, setFocus] = useState(false);
    return (
        <Controller
          control={control}
          name={name}     
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <><TextInput
                style={styles.input(focus)}
                placeholder={placeholder}
                placeholderTextColor="#BDBDBD"
                value={value}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                onChangeText={onChange}
                secureTextEntry={secureTextEntry}
                isPassword={isPassword}
              /> 
              {error && <Text style={styles.error}>{error.message}</Text>}
            </>  
          )}
        />
      );
    }