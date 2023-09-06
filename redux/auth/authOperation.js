import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut,
  } from 'firebase/auth';
  import { createAsyncThunk } from '@reduxjs/toolkit';
  import { auth } from '../../firebase/config';

  export const authSignUpUser = createAsyncThunk(
    'auth/register',
    async (data, thunkAPI) => {
      try {
        await createUserWithEmailAndPassword(auth, data.email, data.password);
        
        const user = auth.currentUser;
        refreshUser({ displayName: data.name, avatarUrl: data.avatar});

        return {
          email: user.email,
          uid: user.uid,
          displayName: data.name,
        };

      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

  export const authSignInUser = createAsyncThunk(
    'auth/logIn',
    async ({ email, password}, thunkAPI) => {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        const user = auth.currentUser;
  
        return {
          email: user.email,
          uid: user.uid,
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

  export const refreshUser = async (update) => {

    const user = auth.currentUser;
  
    if (user) {
          try {
              await updateProfile(user, update);
          } catch(error) {
              throw error
          }
    }
  };