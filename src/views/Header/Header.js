import React ,{Component}from 'react';
import  { Row, Col,Icon,Input,Button,Menu,Avatar,Dropdown} from 'antd';
import {style} from './headerStyle'
import {Link}from 'react-router-dom'
const {Search}=Input;

const logmenu=(
    <Menu style={{minWidth: 200} }>
        <Menu.Item> <Icon type="mobile" />手机号登录</Menu.Item>
        <Menu.Item><Icon type="wechat" />微信登录</Menu.Item>
        <Menu.Item><Icon type="qq" />QQ登录</Menu.Item>
        <Menu.Item><Icon type="weibo" />新浪微博登录</Menu.Item>
        <Menu.Item><Icon type="mail" />网移邮箱登陆</Menu.Item>
  </Menu>
);


class Header extends Component {

    constructor(props){
        super(props);
        this.state={
            navlist:[
                {id:0,text:'我的音乐',isActive:true,current:true},
                {id:1,text:'朋友', isActive:false,current:false},
                {id:2,text:'商城', isActive:false,current:false},
                {id:3,text:'音乐人', isActive:false,current:false},
                {id:4,text:'下载客户端', isActive:false,current:false}
            ]
            
           
        }
    }

    navOver(id){
     
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
        const navlist= this.state.navlist.map((item)=>{
            
                 if(item.id===id&&!item.current){
                     item.isActive=false   
                 }
                 return item
         });
         this.setState({navlist});
    }
    navClick(id){
        const navlist= this.state.navlist.map((item)=>{
                    item.isActive=item.current=false
                 if(item.id===id){
                     item.isActive=item.current=true;
                     

                 }
                 return item
         });
         this.setState({navlist});
    }
    render(){
        const navList=this.state.navlist.map((item)=>{
            
            return <li key={item.id} className={item.isActive ? 'active' : ''}
                        onMouseOver={()=>this.navOver(item.id)} 
                        onMouseOut={()=>this.navOut(item.id)}
                        onClick={()=>this.navClick(item.id)}
                    >
                        <Link to='/'>{item.text}</Link>
                    </li>
        })

        return (
            <header style={style.header}>
                <Row style={{height:64}}>
                    <Col style={style.fullHeight} xxl={4} xl={5} lg={5} md={6} xs={24} sm={24}>
                        <h1 style={style.logo} >
                            <Icon type="youtube" style={{fontSize:38,color:'red',display:'inline-block',verticalAlign:'middle'}}/>
                            <span style={{height:'100%',display:'inline-block',marginLeft:10}}>MyMusic</span>
                        </h1>

                    </Col>
                    <Col style={style.fullHeight} xxl={20} xl={19} lg={19} md={18} xs={0} sm={0}>
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
                            <Dropdown overlay={logmenu}>
                                <Avatar icon="user" />
                              </Dropdown> 
                            </span>
                        </div>
                    </Col>
                    
                </Row>
                <Row  xxl={0} xl={0} lg={0} md={0} xs={24} sm={24}>
                    <Col style={style.fullHeight} xxl={0} xl={0} lg={0} md={0} xs={24} sm={24}>
                            <div style={{width:'100%',backgroundColor:'#242424',overflow:'hidden'}}>
                                <ul className="nav-box" style={{float:'left'}}>
                                    {navList}
                                </ul>
                                <div className="nav-right-box">
                                    <Search className="search"
                                        placeholder=""
                                        onSearch={value => console.log(value)}
                                        />
                                </div>
                            </div>
                    </Col>
                </Row>
            </header>
        )
    }
} 

export default Header;