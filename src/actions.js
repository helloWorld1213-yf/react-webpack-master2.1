/*在此处定：
    变量名 (大写_大写 = 小写_小写)
    声明函数 (注意用value作为属性值)
*/

//-----------------------------------------------

/*定变量名*/
//用户
export const SET_USER_ID='set_user_id';
export const SET_USER_NAME='set_user_name';
//消息
export const ADD_MSG='add_msg';

//-----------------------------------------------

/*定声明函数*/
//此处的声明函数是在每个组件的connect当中直接引入的
export function setUserId(ID){
  return {
    type: SET_USER_ID,
    value: ID
  };
}

export function setUserName(name){
  return {
    type: SET_USER_NAME,
    value: name
  };
}

export function addMsg(msg){
  return {
    type: ADD_MSG,
    value: msg
  };
}
