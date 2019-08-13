import { ActionTypes } from '../constants';

// const initialState = {
//   status: 'ready',
//   tasks: [],
// };

// HARDCODE
const initialState = {
  status: 'ready',
  tasks: [
    {
      "author": "Nobis modi eos possimus aliquam.",
      "badge": {
        "description": "Eaque facere voluptates consequatur nihil odit.",
        "id": "Quam quae aut cumque consequatur asperiores.",
        "name": "Hic illum veniam magni nam perferendis.",
        "recipients": 7796898160710640000
      },
      "description": "Magni necessitatibus debitis qui quos atque.",
      "id": "Excepturi non voluptas dolor eligendi ipsum eius.",
      "title": "Animi sint sunt voluptatum recusandae facilis perferendis.",
      "token": "Ut et non enim.",
      "tokenAllocation": 2705176086150454000,
      "type": "Ad quis sit."
    },
    {
      "author": "Nobis modi eos possimus aliquam.",
      "badge": {
        "description": "Eaque facere voluptates consequatur nihil odit.",
        "id": "Quam quae aut cumque consequatur asperiores.",
        "name": "Hic illum veniam magni nam perferendis.",
        "recipients": 7796898160710640000
      },
      "description": "Magni necessitatibus debitis qui quos atque.",
      "id": "Excepturi non voluptas dolor eligendi ipsum eius.",
      "title": "Animi sint sunt voluptatum recusandae facilis perferendis.",
      "token": "Ut et non enim.",
      "tokenAllocation": 2705176086150454000,
      "type": "Ad quis sit."
    },
    {
      "author": "Nobis modi eos possimus aliquam.",
      "badge": {
        "description": "Eaque facere voluptates consequatur nihil odit.",
        "id": "Quam quae aut cumque consequatur asperiores.",
        "name": "Hic illum veniam magni nam perferendis.",
        "recipients": 7796898160710640000
      },
      "description": "Magni necessitatibus debitis qui quos atque.",
      "id": "Excepturi non voluptas dolor eligendi ipsum eius.",
      "title": "Animi sint sunt voluptatum recusandae facilis perferendis.",
      "token": "Ut et non enim.",
      "tokenAllocation": 2705176086150454000,
      "type": "Ad quis sit."
    }
  ]
};

export default function user(state = initialState, payload) {
  const { payload: data, type } = payload;
  switch (type) {
    case ActionTypes.FETCH_TASKS:
      return {
        ...state,
        status: 'running',
      };
    case ActionTypes.FETCH_TASKS_SUCCESS:
      return {
        ...state,
        status: 'success',
        tasks: data,
      };
    case ActionTypes.FETCH_TASKS_ERROR:
      return {
        ...state,
        status: 'error',
      };
    default:
      return state;
  }
}
