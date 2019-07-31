//这就是真正的redux

/*在此处：
    引入几个分离的Reducers
    并将它们combine之后，导出
*/

import {createStore, combineReducers} from 'redux';

import user from './user';
import msg from './msg';

export default createStore(combineReducers({user, msg}));
