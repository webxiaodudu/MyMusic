import React, { Component } from 'react';
import { Card,Icon ,Row,Col,Spin } from 'antd';
import defualtImg from '../../../../assets/image/changpian.jpg';
import axios from 'axios'
const { Meta } = Card;
class HotRecommend extends Component{
    constructor(props){
        super(props)
        this.state={
            playlists:[]
        }
    }
    componentDidMount(){
        axios.get('/top/playlist?limit=8&order=new')
        .then((res)=>{
           
            const{playlists}=res.data
            this.setState({playlists})
        })
        .catch((erro)=>{
            console.log(erro)
        })
    }
   
    render(){

       const getList=(playlists)=>{//渲染热门推荐列表
         
            if(!playlists.length){
                return (<div className="loading"><Spin size="large" /></div>)
            }
            else{
               return playlists.map((item,index)=>{
                
                    if(index<8){
                        return (
                            <Col span={6} style={{paddingTop:20}} key={item.id}>
                                <Card  
                                    cover={<img src={item.coverImgUrl} />} 
                                    bordered={true} 
                                    actions={[<span><Icon type="customer-service" style={{color:'#c10d0c'}}/>{item.playCount}</span>, <Icon type="play-circle-o" style={{color:'#c10d0c'}} />]}>
                                    <Meta description={(<a href='javascript:;'>{item.name}</a>)} />
                                </Card>
                            </Col>
                        )
                        
                    }
                                    
                    
                })
            }
        }


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
                    <a href="javascript:;" className="more">更多<Icon type="arrow-right"  style={{ fontSize: 12, color: '#c10d0c',marginRight:10 }}/></a>
                </h2>

                <Row gutter={12}>

                        {getList(this.state.playlists)}
                       
                    {/* <Col span={6} style={{paddingTop:20}}>
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
                    </Col> */}
                </Row>
            </div>
        )
    }
}

export default HotRecommend 