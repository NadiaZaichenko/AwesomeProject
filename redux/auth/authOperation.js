import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    onAuthStateChanged,
    signOut,
  } from 'firebase/auth';
  import { createAsyncThunk } from '@reduxjs/toolkit';
  import { auth } from '../../firebase/config';

  export const authSignUpUser = createAsyncThunk(
    'auth/register',
    async ({ email, password, name }, thunkAPI) => {
      try {
        const data = await createUserWithEmailAndPassword(auth, email, password);
        const user = auth.currentUser;
        console.log('user register====> ', user);
  
        refreshUser({ displayName: name });
        return {
          email: user.email,
          uid: user.uid,
          displayName: user.name,
        };

      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  export const authSignInUser = createAsyncThunk(
    'auth/logIn',
    async ({name,  email, password}, thunkAPI) => {
      try {
        const data = await signInWithEmailAndPassword(auth, email, password);
        const user = auth.currentUser;
        console.log('user login====> ', user);
  
        refreshUser({ displayName: name });
  
        return {
          email: user.email,
          uid: user.uid,
          displayName: user.name,
        };
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  

  export const logOut = createAsyncThunk(
    "auth/logOut", 
    async (_, thunkAPI) => {
    try {
      await signOut(auth); 
      return null;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });
