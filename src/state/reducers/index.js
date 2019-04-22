import { combineReducers } from 'redux';
import user from './user';
import profile from './profile';
import wallets from './wallets';
import tasks from './tasks';

export default combineReducers({ 
  user,
  profile,
  wallets,
  tasks,
});