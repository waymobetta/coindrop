import { ActionTypes } from '../constants';

export const fetchTasks = () => {
  return {
    type: ActionTypes.FETCH_TASKS
  }
}