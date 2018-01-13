import React ,{Component}from 'react';
import {Button ,Avatar } from 'antd'
import defualtImg from '../../../../assets/image/changpian.jpg';
import {connect} from 'react-redux';
import{open,close}from '../../../../redux/openModal.reducer'



@connect(state=>state.LoginReducer,{open})
class Login extends Component{

    render()
    {
       // console.log(this.props)
        
        const login=(
            <div className="Login-pannal" style={{backgroundImage:'-webkit-linear-gradient(top,#fff,#ddd)',borderTop:'1px solid #ddd',borderBottom:'1px solid #ddd',padding:20,textAlign:'center'}}>
                <p style={{fontSize:12}}>登录MyMusic云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
                <Button type="primary" className="loginOpen" size="large" onClick={e=>this.props.open(e)}>登录</Button>
            </div>
        )
    
        const logined=(
                <div className="logined-pannal" style={{backgroundImage:'-webkit-linear-gradient(top,#fff,#ddd)',borderTop:'1px solid #ddd',borderBottom:'1px solid #ddd',padding:20,height:200}}>
                        <div className="login-topbox" style={{height:100}}  >
                            <div className="avater-box" style={{float:'left'}}>
                                <Avatar size="large"  shape="square" src={this.props.isLogin ? this.props.profile.avatarUrl : ''} style={{width:80,height:80}}/>
                            </div>
                            <div className="user-pannal" style={{width:100,height:80,paddingLeft:10}}>
                                <span className="userName" style={{fontWeight:'bold',marginLeft:10,display:'block'}}>{this.props.isLogin ? this.props.profile.nickname:''}</span>
                                <span style={{display:'block'}}><Button type="primary" size="small">签到</Button></span>
                            </div>
                        </div>
                        <div className="login-bottom" style={{height:30}}>
                            <ul>
                                <li><a href="javascript:;"><span>{this.props.isLogin ? this.props.profile.eventCount:0}</span><span>动态</span></a></li>
                                <li><a href="javascript:;"><span>{this.props.isLogin ? this.props.profile.follows:0}</span><span>关注</span></a></li>
                                <li><a href="javascript:;"><span>{this.props.isLogin ? this.props.profile.followeds:0}</span><span>粉丝</span></a></li>
                            </ul>
                        </div>
                    </div>
            )

        return this.props.isLogin ? logined : login
            
    }
} 

export default Login;