import { createSlice } from "@reduxjs/toolkit";

import { authSignUpUser, authSignInUser,logOut  } from "./authOperation";

const initialState = {
    name: null, 
    email: null,
    password: null,  
    avatar: null,
    uid: null,
    isLogin: false,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: (builder) => {
        builder
         .addCase(authSignUpUser.fulfilled, (state, action) => {
            state.name = action.payload.displayName;
            state.email = action.payload.email;
            state.uid = action.payload.uid;
            state.isLogin = true;
            state.avatar = action.payload.avatar;
          })
          .addCase(authSignInUser.fulfilled, (state, action) => {
            state.email = action.payload.email;
            state.uid = action.payload.uid;
            state.isLogin = true;
          })
          .addCase(logOut.fulfilled, (state) => {
            state.name = null, 
            state.email= null, 
            state.password= null 
            state.uid = null;
            state.isLogin = false;
          })
      },
});

// export const {updateUserProfile, authisLogin, authSingOut} = authSlice.actions;
export const authReducer = authSlice.reducer;