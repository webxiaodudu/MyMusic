const Open='Open';
const Close='Close';
export function openModalReducer(state={isOpen:false},action){

    if(action.type===Open){
        return {...state,isOpen:true}
    }
    if(action.type===Close){
        return {...state,isOpen:false}
    }
    return state;

}

export function open(e){

   
   return (dispatch)=>{
       
       if(e.key==='item_0'){
            dispatch({type:Open})
       }
      else if(e.target.classList.contains('loginOpen')){
        dispatch({type:Open})
       }
       return 
       
   };     
    
 }

 export function close(){
    return {type:Close};   
 }