import React,{Component} from 'react';
import {Icon,Row,Col,Carousel,Card,Button} from 'antd';

import defualtImg from '../../../../assets/image/changpian.jpg';
const { Meta } = Card;


class LeftNavButton extends Component {
    
    render() {
      return (
    //   <Button 
    //             ghost
    //             size='large'
    //             shape="circle" 
    //             icon="left" 
               
    //             style={{zIndex:1,top:'50%',left:0,position:'absolute',color:'#fff'}} />
            <Icon type="left" 
                    
                    style={{zIndex:1,top:'50%',left:-20,position:'absolute',fontSize:20,cursor:'pointer'} } 
                  
            />
            )
    }
}

class RightNavButton extends Component {

    render() {
   
      return (
    //   <Button 
    //             ghost
    //             size='large'
    //             shape="circle" 
    //             icon="right" 

    //             style={{zIndex:1,top:'50%',right:0,position:'absolute',color:'red'}} />
    <Icon type="right" 
     
        style={{zIndex:1,top:'50%',right:-20,position:'absolute',fontSize:20,cursor:'pointer'} } 
      
    />
            )
    }
}

class NewAlbum extends Component{
    constructor(props){
        super(props)
    }
   
    render(){
       
        const settings={ 
                arrows:true,
                adaptiveHeight:true,
                dots:false, 
                prevArrow: <LeftNavButton />,
                nextArrow:<RightNavButton /> , 
                 
        }


        return (
        <div className="box padd_b40">
            <h2 className="title clearfix">
                <span className="title-left"><Icon type="play-circle" style={{ fontSize: 12, color: '#c10d0c',marginRight:10 }} />新碟上架</span>
                <a href="javascript:;" className="more">更多<Icon type="arrow-right"  style={{ fontSize: 12, color: '#c10d0c',marginRight:10 }}/></a>
            </h2>

            <div className="new_album_wrap">
                <div className="album-box">
                    <Carousel {...settings} >
                        <div className="albumItem-box" style={{height:180,backgroundColor:'#dddddd'}}>
                            <Row type="flex" justify="space-between">
                                <Col span={4}>
                                    <Card  
                                        cover={<img src={defualtImg} height="100"/>} 
                                        style={{ height: 180,width:110 }} 
                                        
                                    >
                                    <Meta
                                        title="Europe Street beat"
                                        description="www.instagram.com"
                                        style={{height:50,}}
                                      />
                                    </Card>
                                </Col>
                                <Col span={4}>
                                    <Card  
                                        cover={<img src={defualtImg} height="100"/>} 
                                        style={{ height: 180,width:110 }} 
                                        
                                    >
                                    <Meta
                                        title="Europe Street beat"
                                        description="www.instagram.com"
                                        style={{height:50,}}
                                      />
                                    </Card>
                                </Col>
                                <Col span={4}>
                                    <Card  
                                        cover={<img src={defualtImg} height="100"/>} 
                                        style={{ height: 180,width:110 }} 
                                        
                                    >
                                    <Meta
                                        title="Europe Street beat"
                                        description="www.instagram.com"
                                        style={{height:50,}}
                                      />
                                    </Card>
                                </Col>
                                <Col span={4}>
                                    <Card  
                                        cover={<img src={defualtImg} height="100"/>} 
                                        style={{ height: 180,width:110 }} 
                                        
                                    >
                                    <Meta
                                        title="Europe Street beat"
                                        description="www.instagram.com"
                                        style={{height:50,}}
                                      />
                                    </Card>
                                </Col>
                                <Col span={4}>
                                    <Card  
                                        cover={<img src={defualtImg} height="100"/>} 
                                        style={{ height: 180,width:110 }} 
                                        
                                    >
                                    <Meta
                                        title="Europe Street beat"
                                        description="www.instagram.com"
                                        style={{height:50,}}
                                      />
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </Carousel>
                </div>
            </div>
            
        </div>)
    }


}

export default NewAlbum