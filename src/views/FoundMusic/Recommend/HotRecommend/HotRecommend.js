import React, { Component } from 'react';
import { Card,Icon ,Row,Col} from 'antd';
import defualtImg from '../../../../assets/image/changpian.jpg';

const { Meta } = Card;
class HotRecommend extends Component{

    render(){

        return(
            <div className="box">
                <h2 className="title clearfix">
                    <span className="title-left"><Icon type="play-circle" style={{ fontSize: 12, color: '#c10d0c',marginRight:10 }} />热门推荐</span>
                    <span className="link-list">
                        <a href="javascript:;" >华语</a>
                        <i>|</i>
                        <a href="javascript:;" >流行</a>
                        <i>|</i>
                        <a href="javascript:;" >摇滚</a>
                        <i>|</i>
                        <a href="javascript:;" >民谣</a>
                        <i>|</i>
                        <a href="javascript:;" >电子</a>
                    </span>
                    <a href="javascript:;" class="more">更多<Icon type="arrow-right"  style={{ fontSize: 12, color: '#c10d0c',marginRight:10 }}/></a>
                </h2>

                <Row gutter={14}>
                    <Col span={6} style={{paddingTop:20}}>
                        <Card  
                            cover={<img src={defualtImg} />} 
                            bordered={true} 
                            actions={[<span><Icon type="customer-service" style={{color:'#c10d0c'}}/>300万</span>, <Icon type="play-circle-o" style={{color:'#c10d0c'}} />]}>
                            <Meta description="This is the description" />
                        </Card>
                    </Col>
                    <Col span={6} style={{paddingTop:20}}>
                        <Card  
                            cover={<img src={defualtImg} />} 
                            bordered={true} 
                            actions={[<span><Icon type="customer-service" style={{color:'#c10d0c'}}/>300万</span>, <Icon type="play-circle-o" style={{color:'#c10d0c'}} />]}>
                            <Meta description="This is the description" />
                        </Card>
                    </Col>
                    <Col span={6} style={{paddingTop:20}}>
                        <Card  
                            cover={<img src={defualtImg} />} 
                            bordered={true} 
                            actions={[<span><Icon type="customer-service" style={{color:'#c10d0c'}}/>300万</span>, <Icon type="play-circle-o" style={{color:'#c10d0c'}} />]}>
                            <Meta description="This is the description" />
                        </Card>
                    </Col>
                    <Col span={6} style={{paddingTop:20}}>
                        <Card  
                            cover={<img src={defualtImg} />} 
                            bordered={true} 
                            actions={[<span><Icon type="customer-service" style={{color:'#c10d0c'}}/>300万</span>, <Icon type="play-circle-o" style={{color:'#c10d0c'}} />]}>
                            <Meta description="This is the description" />
                        </Card>
                    </Col>
                    <Col span={6} style={{paddingTop:20}}>
                        <Card  
                            cover={<img src={defualtImg} />} 
                            bordered={true} 
                            actions={[<span><Icon type="customer-service" style={{color:'#c10d0c'}}/>300万</span>, <Icon type="play-circle-o" style={{color:'#c10d0c'}} />]}>
                            <Meta description="This is the description" />
                        </Card>
                    </Col>
                    <Col span={6} style={{paddingTop:20}}>
                        <Card  
                            cover={<img src={defualtImg} />} 
                            bordered={true} 
                            actions={[<span><Icon type="customer-service" style={{color:'#c10d0c'}}/>300万</span>, <Icon type="play-circle-o" style={{color:'#c10d0c'}} />]}>
                            <Meta description="This is the description" />
                        </Card>
                    </Col>
                    <Col span={6} style={{paddingTop:20}}>
                        <Card  
                            cover={<img src={defualtImg} />} 
                            bordered={true} 
                            actions={[<span><Icon type="customer-service" style={{color:'#c10d0c'}}/>300万</span>, <Icon type="play-circle-o" style={{color:'#c10d0c'}} />]}>
                            <Meta description="This is the description" />
                        </Card>
                    </Col>
                    <Col span={6} style={{paddingTop:20}}>
                        <Card  
                            cover={<img src={defualtImg} />} 
                            bordered={true} 
                            actions={[<span><Icon type="customer-service" style={{color:'#c10d0c'}}/>300万</span>, <Icon type="play-circle-o" style={{color:'#c10d0c'}} />]}>
                            <Meta description="This is the description" />
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default HotRecommend 