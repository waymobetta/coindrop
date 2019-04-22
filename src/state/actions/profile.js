import { ActionTypes } from '../constants';

export const fetchProfile = () => {
  return {
    type: ActionTypes.FETCH_PROFILE
  }
}