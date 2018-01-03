const SHOW_SUBMENU='SHOW_SUBMENU';
const HIDE_SUBMENU='HIDE_SUBMENU';


const init={
    isShow:true
}

export function submenuReducer(state=init,action){
   
    if(action.type==SHOW_SUBMENU){
        return {...state,isShow:true}
    }

    if(action.type==HIDE_SUBMENU){
        return {...state,isShow:false}
    }
    return state;
}


export function toggleSubmenu({isSubMenu}){
   
    return dispatch=>{

        isSubMenu ? dispatch({type:SHOW_SUBMENU}) : dispatch({type:HIDE_SUBMENU})         
    }
}



