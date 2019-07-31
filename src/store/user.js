/*写user部分的Reducer*/

//先从actions当中引入规定好的变量名
import {SET_USER_ID, SET_USER_NAME} from '../actions';

export default function (state={ID: null, name: null}, action){
  switch(action.type){
    case SET_USER_ID:
      return {
        ...state,
        ID: action.value   //注意此处统一都是value
      };
    case SET_USER_NAME:
      return {
        ...state,
        name: action.value
      }
    default:
      return state;

  }
}