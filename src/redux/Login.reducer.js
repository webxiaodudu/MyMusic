import axios from 'axios'

const Login='Login';
const LoginOut="LoginOut";
const init={
    isLogin:false
}
export function LoginReducer(state=init,action){
    if(action.type===Login){
        return {...state,isLogin:true,...action.payload}
    }
    return state
}


export function userLogin (closeModal,{phone,password}){
 
    return (dispatch)=>{
        axios.get(`/login/cellphone?phone=${phone}&password=${password}`)
        .then((res)=>{
          //console.log(res.data);
          //this.props.onCancel();
          dispatch({type:Login,payload:res.data})
          closeModal();
        })
        .catch((erro)=>{
          console.log(erro)
        })
    }
}