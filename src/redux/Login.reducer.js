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
    if(action.type===LoginOut){
        return {...state,isLogin:false}
    }
    return state
}


export function userLogin (closeModal,{phone,password}){
 
    return (dispatch)=>{
        axios.get(`/login/cellphone?phone=${phone}&password=${password}`)
        .then((res)=>{

            var exp = new Date();
            exp.setDate(exp.getDate() + 1);
            document.cookie="__csrf=5bc1aed14820f21e9c59cf97651c166b;expires="+exp;
          //console.log(res.data);
          //this.props.onCancel();
          const {id}=res.data.account;//获取用户ID
          axios.get(`/user/detail?uid=${id}`)
          .then((resProfile)=>{
            dispatch({type:Login,payload:resProfile.data});
          })

          dispatch({type:Login,payload:res.data})
          closeModal&&closeModal();
        })
        .catch((erro)=>{
          console.log(erro)
        })

       
    }
}

export function userLoginOut(e){
    
    return dispatch=>{
        if(e.key==='item_4'){
            var exp = new Date();
            exp.setDate(exp.getDate() - 1);
            document.cookie="__csrf=5bc1aed14820f21e9c59cf97651c166b"+";expires="+exp.toGMTString();
            dispatch({type:LoginOut});
        }
        
    }
    
}