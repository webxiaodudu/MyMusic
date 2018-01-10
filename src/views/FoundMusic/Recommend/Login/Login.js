import React ,{Component}from 'react';
import {Button ,Avatar } from 'antd'
import defualtImg from '../../../../assets/image/changpian.jpg';
class Login extends Component{

    render()
    {
        return (
            <div className="Login-pannal" style={{backgroundImage:'-webkit-linear-gradient(top,#fff,#ddd)',borderTop:'1px solid #ddd',borderBottom:'1px solid #ddd',padding:20,textAlign:'center'}}>
                <p style={{fontSize:12}}>登录MyMusic云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
                <Button type="danger" size="large">登录</Button>
            </div>

            // <div className="logined-pannal" style={{backgroundImage:'-webkit-linear-gradient(top,#fff,#ddd)',borderTop:'1px solid #ddd',borderBottom:'1px solid #ddd',padding:20,height:200}}>
            //     <div className="login-topbox" style={{height:100}}  >
            //         <div className="avater-box" style={{float:'left'}}>
            //             <Avatar size="large"  shape="square" src={defualtImg} style={{width:80,height:80}}/>
            //         </div>
            //         <div className="user-pannal" style={{width:100,height:80,paddingLeft:10}}>
            //             <span className="userName" style={{fontWeight:'bold',marginLeft:10,display:'block'}}>zhangliwen</span>
            //             <span style={{display:'block'}}><Button type="primary" size="small">签到</Button></span>
            //         </div>
            //     </div>
            //     <div className="login-bottom" style={{height:30}}>
            //         <ul>
            //             <li><a href="javascript:;"><span>0</span><span>动态</span></a></li>
            //             <li><a href="javascript:;"><span>0</span><span>关注</span></a></li>
            //             <li><a href="javascript:;"><span>0</span><span>粉丝</span></a></li>
            //         </ul>
            //     </div>
            // </div>
        )
    }
} 

export default Login;