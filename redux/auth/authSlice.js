import { createSlice } from "@reduxjs/toolkit";

import { authSignUpUser, authSignInUser,logOut  } from "./authOperation";

const initialState = {
   user: { name: null, 
    email: null,
    password: null,  
    avatar: null,
},
    userId: null,
    isLogin: false,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: (builder) => {
        builder
          .addCase(authSignInUser.fulfilled, (state, action) => {
            state.user.email = action.payload.email;
            state.uid = action.payload.uid;
            state.isLogin = true;
          })
          .addCase(logOut.fulfilled, (state) => {
            state.user = { name: null, email: null, password: null };
            state.uid = null;
            state.isLogin = false;
          })
          .addCase(authSignUpUser.fulfilled, (state, action) => {
            state.user.name = action.payload.displayName;
            state.user.email = action.payload.email;
            state.userId = action.payload.userId;
            state.isLogin = true;
          })
      },
});

// export const {updateUserProfile, authisLogin, authSingOut} = authSlice.actions;
export const authReducer = authSlice.reducer;