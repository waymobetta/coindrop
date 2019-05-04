import { ActionTypes } from '../constants';

export const fetchTasks = () => {
  return {
    type: ActionTypes.FETCH_TASKS
  }
}

export const completeTask = (taskId) => {
  return {
    type: ActionTypes.COMPLETE_TASK,
    taskId
  }
}