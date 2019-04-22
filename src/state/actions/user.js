import { ActionTypes } from '../constants';

export const userLogin = user => {
  return {
    type: ActionTypes.USER_LOGIN,
    user
  }
}

export const userSignup = user => {
  return {
    type: ActionTypes.USER_SIGNUP,
    user
  }
}