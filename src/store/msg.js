/*写msg部分的Reducer*/

//先从actions当中引入规定好的变量名
import {ADD_MSG, SET_USER_ID, SET_USER_NAME} from '../actions';

export default function (state={ID: null, name: null}, action){
  switch(action.type){
    case ADD_MSG:
      return [
        ...state,
        action.msg
      ];
    default:
      return state;

  }
}