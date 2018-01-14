import {combineReducers} from 'redux';
import {submenuReducer}from './submenu.reducer';
import {openModalReducer}from './openModal.reducer';
import {LoginReducer}from './Login.reducer'
import {PlayReducer} from './playList.reducer'
export default combineReducers({
    submenuReducer,
    openModalReducer,
    LoginReducer,
    PlayReducer
})