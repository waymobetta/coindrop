import { ActionTypes } from '../constants';
import myCryptoLogo from "../../components/assets/mycrypto.png";
import adtokenLogo from "../../components/assets/adtoken.png";
import rippleLogo from "../../components/assets/ripple.png";
import stellarLogo from "../../components/assets/stellar.png";
import cardanoLogo from "../../components/assets/cardano.jpg";

// const initialState = {
//   status: 'ready',
//   tasks: [],
// };

// HARDCODE
const initialState = {
  status: 'ready',
  tasks: [
    {
      "author": "MyCrypto",
      "logo": myCryptoLogo,
      "assignedDate": "9/1/19",
      "badge": {
        "description": "",
        "id": "badge-01",
        "name": "101: MyCrypto",
        "recipients": 3
      },
      "description": "Learn more about MyCrypto",
      "id": "01",
      "title": "MyCrypto 101",
      "token": "N/A",
      "tokenAllocation": 0,
      "type": "Action",
      "videoSrc": "project_video_here",
      "instructions": ""
    },
    {
      "author": "adChain",
      "logo": adtokenLogo,
      "assignedDate": "8/11/19",
      "badge": {
        "description": "Shown profiency in understanding the basics of how the Stellar blockchain operates",
        "id": "badge-02",
        "name": "101: adChain",
        "recipients": 3
      },
      "description": "Learn more about the adChain Project",
      "id": "02",
      "title": "adChain 101",
      "token": "ADT",
      "tokenAllocation": 500,
      "type": "Quiz",
      "videoSrc": "https://youtube.com/embed/cOeqNSN8_Uw", 
      "instructions": "Watch the informational video below to learn about adChain. Then, take the quiz to test your knowledge and to try and collect some adToken (ADT)!"
    },
    {
      "author": "Stellar",
      "logo": stellarLogo,
      "assignedDate": "6/21/19",
      "badge": {
        "description": "Shown profiency in understanding the basics of how the Stellar blockchain operates",
        "id": "badge-03",
        "name": "101: Stellar",
        "recipients": 3
      },
      "description": "Learn more about the Stellar blockchain",
      "id": "03",
      "title": "Stellar 101",
      "token": "XLM",
      "tokenAllocation": 500,
      "type": "Quiz",
      "videoSrc": "https://youtube.com/embed/GtQY8Jfa4NA",
      "instructions": "Watch the informational video below to learn about Stellar. Then, take the quiz to test your knowledge and to try and collect some Stellar Lumens (XLM)!"
    },
    {
      "author": "Ripple",
      "logo": rippleLogo,
      "assignedDate": "6/15/19",
      "badge": {
        "description": "Shown profiency in understanding the basics of how the Ripple blockchain operates",
        "id": "badge-04",
        "name": "101: Ripple",
        "recipients": 3
      },
      "description": "Learn more about the Ripple blockchain",
      "id": "04",
      "title": "Ripple 101",
      "token": "XRP",
      "tokenAllocation": 500,
      "type": "Quiz",
      "videoSrc": "https://youtube.com/embed/vTEjf7MYAWA",
      "instructions": "Watch the informational video below to learn about Ripple. Then, take the quiz to test your knowledge and to try and collect some Ripple (XRP)!"
    },
    {
      "author": "Cardano",
      "logo": cardanoLogo,
      "assignedDate": "5/20/19",
      "badge": {
        "description": "Shown profiency in understanding the basics of how the Cardano blockchain operates",
        "id": "badge-05",
        "name": "101: Cardano",
        "recipients": 3
      },
      "description": "Learn more about the Cardano blockchain",
      "id": "05",
      "title": "Cardano 101",
      "token": "ADA",
      "tokenAllocation": 500,
      "type": "Quiz",
      "videoSrc": "https://youtube.com/embed/Do8rHvr65ZA",
      "instructions": "Watch the informational video below to learn about Cardano. Then, take the quiz to test your knowledge and to try and collect some Cardano Token (ADA)!"
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
