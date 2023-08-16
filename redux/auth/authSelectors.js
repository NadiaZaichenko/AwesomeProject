export const selectIslogin = state=> state.auth.isLogin;
export const selectName = state=> state.auth.name;
export const selectPassword = state=> state.auth.password;
export const selectEmail = state=> state.auth.email;
export const selectAvatar = state=> state.auth.avatar;
export const selectUserId = state=> state.auth.uid;
export const selectUser = state => ({
    name: state.auth.name,
    email: state.auth.email,
    id: state.auth.uid,
    avatar: state.auth.avatar,
  });