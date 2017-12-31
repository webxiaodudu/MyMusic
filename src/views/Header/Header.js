import React ,{Component}from 'react';
import  { Row, Col,Icon} from 'antd';
import {style} from './headerStyle'
import {Link}from 'react-router-dom'

class Header extends Component {
    render(){
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
                            <li><Link to='/'>发现音乐</Link></li>
                            <li><Link to='/'>我的音乐</Link></li>
                            <li><Link to='/'>朋友</Link></li>
                            <li><Link to='/'>商城</Link></li>
                            <li><Link to='/'>音乐人</Link></li>
                            <li><Link to='/'>下载客户端</Link></li>
                        </ul>
                    </Col>
                </Row>
            </header>
        )
    }
} 

export default Header;