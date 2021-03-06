import React ,{Component}from 'react';
import  { Row, Col,Icon,Input,Button,Menu,Avatar,Dropdown} from 'antd';
import {connect} from 'react-redux';
import{toggleSubmenu} from '../../redux/submenu.reducer';
import{open,close} from '../../redux/openModal.reducer';
import {userLoginOut,userLogin} from '../../redux/Login.reducer'
import {style} from './headerStyle';
import {Link,withRouter}from 'react-router-dom';
import SubMenu from '../Submenu/Submenu';
import axios from 'axios'

const {Search}=Input;


const  logmenu=(open)=>{
   
    return(
    <Menu style={{minWidth: 200}}  onClick={(e)=>open(e)}>
        <Menu.Item className="phone"> <Icon type="mobile" />手机号登录</Menu.Item>
        <Menu.Item className="weixin"><Icon type="wechat" />微信登录</Menu.Item>
        <Menu.Item className="qq"><Icon type="qq" />QQ登录</Menu.Item>
        <Menu.Item className="weibo"><Icon type="weibo" />新浪微博登录</Menu.Item>
        <Menu.Item className="mail"><Icon type="mail" />网移邮箱登陆</Menu.Item>
  </Menu>)
}

const  logedmenu=(userLoginOut)=>{
    return (
        <Menu style={{minWidth: 200} }  onClick={(e)=>userLoginOut(e)} >
            <Menu.Item> <Icon type="user" />我的主页</Menu.Item>
            <Menu.Item><Icon type="message" />我的消息</Menu.Item>
            <Menu.Item><Icon type="star" />我的等级</Menu.Item>
            <Menu.Item><Icon type="trophy" />vip会员</Menu.Item>
            <Menu.Item><Icon type="logout" />退出</Menu.Item>
        </Menu>
    )
}
    



@connect(
    state=>state,
    {toggleSubmenu,open,userLoginOut,userLogin}
)
@withRouter
class Header extends Component {

    constructor(props){
        super(props);
        this.state={
            navlist:[
                {id:0,text:'发现音乐',isActive:true,current:true,to:'/',isSubMenu:true,sublist:[
                  {id: 0,text:'推荐'},
                  {id: 1,text:'排行榜'},
                  {id: 2,text:'歌单'},
                  {id: 3,text:'主播电台'},
                  {id: 4,text:'歌手'},
                  {id: 5,text:'新碟上架'}
                ]},
                {id:1,text:'我的音乐',isActive:false,current:false,to:'/MyMusic',isSubMenu:false,},
                {id:2,text:'朋友', isActive:false,current:false,to:'/Friend',isSubMenu:false,},
                {id:3,text:'商城', isActive:false,current:false,to:'/',isSubMenu:false,},
                {id:4,text:'音乐人', isActive:false,current:false,to:'/',isSubMenu:false,},
                {id:5,text:'下载客户端', isActive:false,current:false,to:'/',isSubMenu:false,}
            ],
            
            
           
        }
    }
    componentDidMount(){
        if(document.cookie&&document.cookie.split('; ').length===3){
            const isLoginFlag =document.cookie.split('; ');
           
            this.props.userLogin('',{phone:isLoginFlag[1].split('=')[1],password:isLoginFlag[2].split('=')[1]});
        }
        
         //const namePass= isLoginFlag[1].split('&');

         //console.log(document.cookie)
        //  if(isLoginFlag.length){
        //      this.props.userLogin('',{phone:namePass[0].split('=')[1],password:namePass[1].split('=')[1]});
        //  }
        // axios.get('/login/refresh').then((res)=>{
        //     console.log(res.data)
        //     console.log(document.cookie)
        // })

    
    }
    navOver(id){
     //鼠标悬停
            const navlist= this.state.navlist.map((item)=>{
               
                    if(item.id===id){
                        item.isActive=true   
                    }
                    return item
            });
            
            this.setState({
                navlist
            })

    }
    navOut(id){
        //鼠标移出
        const navlist= this.state.navlist.map((item)=>{
            
                 if(item.id===id&&!item.current){
                     item.isActive=false   
                 }
                 return item
         });
         this.setState({navlist});
    }
    navClick(id,to){
       // 鼠标点击
        const navlist= this.state.navlist.map((item)=>{
                item.isActive=item.current=false
                 if(item.id===id){
                     item.isActive=item.current=true; 
                     this.props.toggleSubmenu(item);//发送切换子菜单action
                 }
                 return item
         });
         this.setState({navlist});
       this.props.history.push(to)
   
    }
    
    render(){
       
       const {LoginReducer}=this.props;
        
        const navList=this.state.navlist.map((item)=>{

            return <li key={item.id} className={item.isActive ? 'active' : ''}
                        onMouseOver={()=>this.navOver(item.id)} 
                        onMouseOut={()=>this.navOut(item.id)}
                        onClick={()=>this.navClick(item.id,item.to)}
                    >
                        {item.current ? <i className="current"></i> : ''}                   
                        {item.id===4 ? <i className="hot"></i> : ''}
                        {item.text}
                    </li>
        })

    
        return (
            <header style={style.header}>
                <Row style={{height:61,width:1100,margin:'0 auto'}}>
                    <Col style={style.fullHeight} span={4} >
                        <h1 style={style.logo} >
                            <Icon type="youtube" style={{fontSize:38,color:'red',display:'inline-block',verticalAlign:'middle'}}/>
                            <span style={{height:'100%',display:'inline-block',marginLeft:10}}>MyMusic</span>
                        </h1>
                    </Col>
                    <Col style={style.fullHeight} span={20}>
                        <ul className="nav-box">
                            {navList}
                        </ul>
                        <div className="nav-right-box">
                            <span style={{display:'inline-block',width:200,verticalAlign:'middle',margin:'0 10px'}}>
                                <Search className="search"
                                    placeholder=""
                                    onSearch={value => console.log(value)}
                                    />
                                
                            </span>
                            <span style={{display:'inline-block',verticalAlign:'middle'}}>
                                <Button ghost ><Icon type="video-camera" />视频投稿</Button>
                            </span>
                            <span className="loginMenu">
                            <Dropdown overlay={LoginReducer.isLogin ? logedmenu(this.props.userLoginOut) : logmenu(this.props.open)}>
                                <Avatar icon="user" src={LoginReducer.isLogin ? LoginReducer.profile.avatarUrl:''}/>
                              </Dropdown> 
                            </span>
                        </div>
                    </Col>
                </Row>
                 { this.props.submenuReducer.isShow ? <SubMenu /> : ''} 
            </header>
        )
    }
} 


export default Header;