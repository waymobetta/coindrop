import { ActionTypes } from '../constants';

export const userSignup = user => ({
  type: ActionTypes.USER_SIGNUP,
  user
})


export const userLogin = user => ({
  type: ActionTypes.USER_LOGIN,
  user
})

export const userLogout = () => ({
  type: ActionTypes.USER_LOGOUT,
})
