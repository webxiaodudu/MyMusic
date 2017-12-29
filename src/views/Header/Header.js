import React ,{Component}from 'react';
import  { Row, Col } from 'antd';
import {style} from './headerStyle'

class Header extends Component {
    render(){
        return (
            <header style={style.header}>
                <Row style={{height:64}}>
                    <Col style={style.fullHeight} xxl={4} xl={5} lg={5} md={6} xs={24} sm={24}>
                        <h1 style={style.logo} >MakerResume</h1>
                    </Col>
                    <Col style={style.fullHeight} xxl={20} xl={19} lg={19} md={18} xs={0} sm={0}>Col</Col>
                </Row>
            </header>
        )
    }
} 

export default Header;